import { Router } from 'express';

import MatchesController from '../controller/MatchesService';

const matchesRouter = Router();

matchesRouter.get('/matches', (req, res) => MatchesController.getAllMatches(req, res));

export default matchesRouter;
