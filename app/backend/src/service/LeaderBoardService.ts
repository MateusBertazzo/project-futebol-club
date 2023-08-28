import Matche from '../database/models/Matche';
import Team from '../database/models/Team';
import leaderLogic from '../utils/leaderBoardLogic';

export default class LeaderBoardService {
  protected modelMatche = Matche;
  protected modelTeam = Team;

  async staticsResults(teamSide: string) {
    const matches = await this.modelMatche.findAll();
    const teams = await this.modelTeam.findAll();

    const statics = leaderLogic.statistcsTeams(teams, matches, teamSide);

    return statics;
  }
}
