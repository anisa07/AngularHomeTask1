import {Action} from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  LoginInfo = '[Auth] Login Info',
  GetLoginInfo = '[Auth] Get Login Info',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  // constructor(public payload: string) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: any) {}
}

export class LoginInfo implements Action {
  readonly type = AuthActionTypes.LoginInfo;

  constructor(public payload: any) {}
}

export class GetLoginInfo implements Action {
  readonly type = AuthActionTypes.GetLoginInfo;
}

export type AuthActions = Login | Logout | LoginSuccess | LoginFailure | LoginInfo | GetLoginInfo;
