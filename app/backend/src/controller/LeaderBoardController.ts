import { Request, Response } from 'express';
import LeaderBoardService from '../service/LeaderBoardService';

export default class LeaderBoardController {
  private _service = new LeaderBoardService();

  async staticsHome(_req: Request, res: Response) {
    const staticsHome = await this._service.staticsHome('home');

    res.status(200).json(staticsHome);
  }
}
