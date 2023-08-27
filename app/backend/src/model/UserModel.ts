import User from '../database/models/User';
import ILogin from '../Interfaces/modelLoginType/ILogin';
import { ILoginModel } from '../Interfaces/modelLoginType/ILoginModel';

export default class UserModel implements ILoginModel {
  private model = User;

  async getByEmail(email: ILogin['email']): Promise<ILogin | null> {
    const user = await this.model.findOne({ where: { email } });
    if (!user) {
      return null;
    }
    return user;
  }

  // async getByEmailAndRole(email: ILogin['email']): Promise<ILogin | object> {
  //   const user = await this.model.findOne({ where: { email } });
  //   if (!user) {
  //     return { data: { message: 'ERROR' } };
  //   }
  //   return user;
  // }
}
