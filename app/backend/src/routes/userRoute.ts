import { Router } from 'express';
import UserController from '../controller/UserController';
import { validateLogin, validateEmail, validatePassword } from '../middleware/loginValidate';
import validateToken from '../middleware/authLoginToken';

const userRoute = new UserController();

const routerUser = Router();

routerUser.post(
  '/login',
  validateLogin,
  validateEmail,
  validatePassword,
  (req, res) => userRoute.login(req, res),
);

routerUser.get(
  '/login/role',
  validateToken,
  (req, res) => UserController.loginValidate(req, res),
);

export default routerUser;
