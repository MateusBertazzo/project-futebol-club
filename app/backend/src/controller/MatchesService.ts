import { Request, Response } from 'express';
import MatchesService from '../service/MatchesService';

export default class MatchesController {
  static async getAllMatches(req: Request, res: Response): Promise<Response> {
    const response = await MatchesService.getAllMatches();

    return res.status(200).json(response.data);
  }
}
