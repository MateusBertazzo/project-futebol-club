import { Router } from 'express';
import LeaderBoardController from '../controller/LeaderBoardController';

const leaderBoardController = new LeaderBoardController();

const leaderBoardRoute = Router();

leaderBoardRoute.get(
  '/leaderboard/home',
  (req, res) => leaderBoardController.staticsHome(req, res),
);

export default leaderBoardRoute;
