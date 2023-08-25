import { Request, Response } from 'express';

import TeamsService from '../service/TeamsService';

export default class TeamsController {
  constructor(
    private teamsService: TeamsService = new TeamsService(),
  ) {}

  async getAllTeams(_req: Request, res: Response): Promise<Response> {
    const result = await this.teamsService.getAllTeams();
    console.log('dasdasdasdas');
    return res.status(200).json(result.data);
  }
}
