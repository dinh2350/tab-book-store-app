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
