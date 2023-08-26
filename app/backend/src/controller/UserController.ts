import { Request, Response } from 'express';
import UserService from '../service/UserService';

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) {}

  async login(req: Request, res: Response): Promise<Response> {
    const response = await this.userService.getByEmail(req.body);

    if (response.status !== 'SUCCESSFUL') {
      return res.status(400).json(response.data);
    }

    return res.status(200).json(response.data);
  }
}
