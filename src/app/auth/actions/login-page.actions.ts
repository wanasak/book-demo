import { Credentials } from "./../models/user";
import { Action } from "@ngrx/store";

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum LoginPageActionTypes {
  Login = "[LoginPage] Login"
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class Login implements Action {
  readonly type = LoginPageActionTypes.Login;

  constructor(public payload: { credentials: Credentials }) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type LoginPageActionsUnion = Login;
