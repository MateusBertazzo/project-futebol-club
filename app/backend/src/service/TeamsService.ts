import { ITeams } from '../Interfaces/modelTeamType/ITeams';
import { ITeamsModel } from '../Interfaces/modelTeamType/ITeamsModel';
import TeamsModel from '../model/TeamsModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class TeamsService {
  constructor(
    private teamsModel: ITeamsModel = new TeamsModel(),
  ) {}

  async getAllTeams(): Promise<ServiceResponse<ITeams[]>> {
    const teams = await this.teamsModel.getAll();
    return { status: 'SUCCESSFUL', data: teams };
  }

  async getTeamById(id: number): Promise<ServiceResponse<ITeams | null>> {
    const team = await this.teamsModel.getById(id);
    return { status: 'SUCCESSFUL', data: team };
  }
}
