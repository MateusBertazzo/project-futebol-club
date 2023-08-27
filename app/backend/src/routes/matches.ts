import { Router } from 'express';

import MatchesController from '../controller/MatchesService';
import validateToken from '../middleware/authLoginToken';

const matchesRouter = Router();

matchesRouter.get('/matches', (req, res) => MatchesController.getAllMatches(req, res));
matchesRouter.patch(
  '/matches/:id/finish',
  validateToken,
  (req, res) => MatchesController.finishMatch(req, res),
);

export default matchesRouter;
