import Team from '../database/models/Team';
import Matche from '../database/models/Matche';
import IMatcheBody, { IMatcheBodyCreate } from '../Interfaces/IMatche/IMatcheBody';
import validateTeamExist from '../utils/teamExistValidate';

export default class MatchesService {
  static async getAllMatches() {
    const matches = await Matche.findAll({
      include: [
        { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return { status: 'success', data: matches };
  }

  static async finishMatch(matchId: number) {
    const resultMatch = await Matche.update({ inProgress: false }, { where: { id: matchId } });

    return { status: 'success', data: resultMatch };
  }

  static async matcheUpdate(matchId: number, body: IMatcheBody) {
    const
      resultMatch = await Matche
        .update(
          {
            homeTeamGoals: body.homeTeamGoals, awayTeamGoals: body.awayTeamGoals,
          },

          { where: { id: matchId } },
        );

    return { status: 'success', data: resultMatch };
  }

  static async createMatche({
    homeTeamGoals, awayTeamGoals, homeTeamId, awayTeamId } : IMatcheBodyCreate) {
    const allTeams = await Team.findAll();

    const messageError = 'It is not possible to create a match with two equal teams';

    if (homeTeamId === awayTeamId) {
      return { status: 'error', data: { message: messageError } };
    }

    const homeTeamExist = validateTeamExist(homeTeamId, allTeams);
    const awayTeamExist = validateTeamExist(awayTeamId, allTeams);

    if (!homeTeamExist || !awayTeamExist) {
      return { status: 'NOT FOUND', data: { message: 'There is no team with such id!' } };
    }

    const matcheCreate = await Matche.create({
      homeTeamGoals, awayTeamGoals, homeTeamId, awayTeamId, inProgress: true,
    });

    return { status: 'success', data: matcheCreate };
  }
}
