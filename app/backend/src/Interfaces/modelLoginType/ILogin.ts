export default interface ILogin {
  email: string,
  password: string,
}

export type IUserResponse = Omit<ILogin, 'password'>;
