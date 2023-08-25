import { Router } from 'express';

import teamsRoute from './teamsRoute';

const router = Router();

router.use('/teams', teamsRoute);

export default router;
