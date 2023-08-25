import { ITeamsModel } from '../Interfaces/modelType/ITeamsModel';
import { ITeams } from '../Interfaces/modelType/ITeams';
import Team from '../database/models/Team';

export default class TeamsModel implements ITeamsModel {
  protected model = Team;

  async getAll(): Promise<ITeams[]> {
    const dbTeams = await this.model.findAll();
    return dbTeams;
  }
}
