import { Action } from "@ngrx/store";

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum AuthActionTypes {
  Logout = "[Auth] Logout",
  LogoutConfirmation = "[Auth] LogoutConfirmation",
  LogoutConfirmationDismiss = "[Auth] LogoutConfirmationDismiss"
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class LogoutConfirmation implements Action {
  readonly type = AuthActionTypes.LogoutConfirmation;
}

export class LogoutConfirmationDismiss implements Action {
  readonly type = AuthActionTypes.LogoutConfirmation;
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type AuthActionsUnion =
  | Logout
  | LogoutConfirmation
  | LogoutConfirmationDismiss;
