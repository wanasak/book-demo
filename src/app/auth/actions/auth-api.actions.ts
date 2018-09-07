import { User } from "./../models/user";
import { Action } from "@ngrx/store";

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum AuthApiActionTypes {
  LoginSucess = "[AuthApi] LoginSucess",
  LoginFailure = "[AuthApi] LoginFailure",
  LoginRedirect = "[AuthApi] LoginRedirect"
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoginSuccess implements Action {
  readonly type = AuthApiActionTypes.LoginSucess;

  constructor(public payload: { user: User }) {}
}

export class LoginFailure implements Action {
  readonly type = AuthApiActionTypes.LoginFailure;

  constructor(public payload: { error: any }) {}
}

export class LoginRedirect implements Action {
  readonly type = AuthApiActionTypes.LoginRedirect;
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type AuthApiActionsUnion = LoginSuccess | LoginFailure | LoginRedirect;
