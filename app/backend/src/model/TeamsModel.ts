import { ITeamsModel } from '../Interfaces/modelTeamType/ITeamsModel';
import { ITeams } from '../Interfaces/modelTeamType/ITeams';
import Team from '../database/models/Team';

export default class TeamsModel implements ITeamsModel {
  protected model = Team;

  async getAll(): Promise<ITeams[]> {
    const dbTeams = await this.model.findAll();
    return dbTeams;
  }

  async getById(id: number): Promise<ITeams | null> {
    const dbTeam = await this.model.findByPk(id);
    return dbTeam;
  }
}
