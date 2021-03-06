import { Action } from "@ngrx/store";
import { Book } from "../models/book.model";

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum SelectedBookPageActionTypes {
  AddBook = "[SelectedBookPage] AddBook",
  RemoveBook = "[SelectedBookPage] RemoveBook"
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class AddBook implements Action {
  readonly type = SelectedBookPageActionTypes.AddBook;

  constructor(public payload: Book) {}
}

export class RemoveBook implements Action {
  readonly type = SelectedBookPageActionTypes.RemoveBook;

  constructor(public payload: Book) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type SelectedBookPageActionsUnion = AddBook | RemoveBook;
