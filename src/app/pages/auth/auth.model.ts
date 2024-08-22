export enum USER_ROLES {
  ADMIN = 'Admin',
  USER = 'User',
}

export interface IUser {
  username: string;
  email: string;
  id: number;
  role: USER_ROLES;
}

export interface IReqSignUp {
  username: string;
  email: string;
  password: string;
}

export interface IReqSignIn {
  email: string;
  password: string;
}

export interface IResSignIn {
  token: string;
}

export interface IResSignUp {
  user: IUser;
  token: string;
}
