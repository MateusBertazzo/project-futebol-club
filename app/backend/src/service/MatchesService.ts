import Team from '../database/models/Team';
import Matche from '../database/models/Matche';

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
}
