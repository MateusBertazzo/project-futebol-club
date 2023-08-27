import * as bcrypt from 'bcryptjs';
import ILogin, { ILoginRole } from '../Interfaces/modelLoginType/ILogin';
import JWT from '../utils/JWT';
import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';
import { IToken } from '../Interfaces/modelLoginType/IToken';
import { ILoginModel } from '../Interfaces/modelLoginType/ILoginModel';
import User from '../model/UserModel';
import UserDb from '../database/models/User';

export default class UserService {
  constructor(private userModel: ILoginModel = new User()) {}

  async getByEmail(data: ILogin): Promise<ServiceResponse<ServiceMessage | IToken>> {
    const user = await this.userModel.getByEmail(data.email);

    if (!user) {
      return { status: 'INVALID_DATA', data: { message: 'Invalid email or password' } };
    }
    if (!bcrypt.compareSync(data.password, user.password)) {
      return { status: 'INVALID_DATA', data: { message: 'Invalid email or password' } };
    }
    // const { email } = user as ILogin;
    const token = JWT.sign({ email: user.email });

    return { status: 'SUCCESSFUL', data: { token } };
  }

  static async loginValidate(email: string): Promise<ServiceResponse<ServiceMessage | string>> {
    const user = await UserDb.findOne({ where: { email } }) as ILoginRole;

    return { status: 'SUCCESSFUL', data: user.role };
  }
}
