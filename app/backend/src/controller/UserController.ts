import { Request, Response } from 'express';
import UserService from '../service/UserService';

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) {}

  async login(req: Request, res: Response): Promise<Response> {
    const response = await this.userService.getByEmail(req.body);

    if (response.status !== 'SUCCESSFUL') {
      return res.status(401).json(response.data);
    }

    return res.status(200).json(response.data);
  }

  static async loginValidate(req: Request, res: Response): Promise<Response> {
    const { email } = req.body.user;

    const response = await UserService.loginValidate(email);

    if (response.status === 'NOT_FOUND') return res.status(401).json(response.data);

    return res.status(200).json(response.data);
  }
}
