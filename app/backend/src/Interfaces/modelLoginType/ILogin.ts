export default interface ILogin {
  email: string,
  password: string,
}

export interface ILoginRole {
  email: string,
  password: string,
  role: string,
}

export type IUserResponse = Omit<ILogin, 'password'>;
