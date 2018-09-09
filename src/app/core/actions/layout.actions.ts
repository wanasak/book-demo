import { Action } from "@ngrx/store";

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum LayoutActionTypes {
  OpenSidenav = "[Layout] OpenSidenav",
  CloseSidenav = "[Layout] CloseSidenav"
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class OpenSidenav implements Action {
  readonly type = LayoutActionTypes.OpenSidenav;
}

export class CloseSidenav implements Action {
  readonly type = LayoutActionTypes.CloseSidenav;
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type LayoutActionsUnion = OpenSidenav | CloseSidenav;
