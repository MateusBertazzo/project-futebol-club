import { Router } from 'express';
import UserController from '../controller/UserController';

const userRoute = new UserController();

const routerUser = Router();

routerUser.post('/', (req, res) => userRoute.login(req, res));

export default routerUser;
