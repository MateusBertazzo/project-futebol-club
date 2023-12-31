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

  static async finishMatch(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const response = await MatchesService.finishMatch(Number(id));

    return res.status(200).json(response.status);
  }

  static async matcheUpdate(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    const response = await MatchesService.matcheUpdate(Number(id), {
      homeTeamGoals,
      awayTeamGoals,
    });

    return res.status(200).json(response.status);
  }

  static async createMatche(req: Request, res: Response): Promise<Response> {
    const response = await MatchesService.createMatche(req.body);

    if (response.status === 'error') {
      return res.status(422).json(response.data);
    }

    if (response.status === 'NOT FOUND') {
      return res.status(404).json(response.data);
    }

    return res.status(201).json(response.data);
  }
}
