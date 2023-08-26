import { Router } from 'express';
import UserController from '../controller/UserController';
import { validateLogin, validateEmail, validatePassword } from '../middleware/loginValidate';

const userRoute = new UserController();

const routerUser = Router();

routerUser.post(
  '/login',
  validateLogin,
  validateEmail,
  validatePassword,
  (req, res) => userRoute.login(req, res),
);

export default routerUser;
