import { Request, Response } from 'express';
import MatchesService from '../service/MatchesService';

export default class MatchesController {
  static async getAllMatches(req: Request, res: Response): Promise<Response> {
    const { inProgress } = req.query;

    if (inProgress === 'true') {
      const response = await MatchesService.getAllMatches();
      const matchesInProgress = response
        .data.filter((match) => match.inProgress === true);
      return res.status(200).json(matchesInProgress);
    }

    if (inProgress === 'false') {
      const response = await MatchesService.getAllMatches();
      const matchesInFinish = response
        .data.filter((match) => match.inProgress === false);
      return res.status(200).json(matchesInFinish);
    }

    const response = await MatchesService.getAllMatches();

    return res.status(200).json(response.data);
  }
}
