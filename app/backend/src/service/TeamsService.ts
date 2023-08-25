import { ITeams } from '../Interfaces/modelType/ITeams';
import { ITeamsModel } from '../Interfaces/modelType/ITeamsModel';
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
}
