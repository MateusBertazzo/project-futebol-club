import { Request, Response } from 'express';
import LeaderBoardService from '../service/LeaderBoardService';

export default class LeaderBoardController {
  private _service = new LeaderBoardService();

  async staticsHome(_req: Request, res: Response) {
    const staticsHome = await this._service.staticsResults('home');

    res.status(200).json(staticsHome);
  }

  async staticsAway(_req: Request, res: Response) {
    const staticsAway = await this._service.staticsResults('away');

    res.status(200).json(staticsAway);
  }
}
