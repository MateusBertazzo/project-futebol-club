import { Router } from 'express';
import TeamsController from '../controller/TeamsController';

const teamsRoute = new TeamsController();

const router = Router();

router.get('/teams', (req, res) => teamsRoute.getAllTeams(req, res));
router.get('/teams/:id', (req, res) => teamsRoute.getTeamById(req, res));

export default router;
