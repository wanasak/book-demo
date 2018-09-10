import { Action } from "@ngrx/store";
import { Book } from "../models/book.model";

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum CollectionApiActionTypes {
  AddBookSuccess = "[CollectionApi] AddBookSuccess",
  AddBookFailure = "[CollectionApi] AddBookFailure",
  RemoveBookSuccess = "[CollectionApi] RemoveBookSuccess",
  RemoveBookFailure = "[CollectionApi] RemoveBookFailure",
  LoadBooksSuccess = "[CollectionApi] LoadBooksSuccess",
  LoadBooksFailure = "[CollectionApi] LoadBooksFailure"
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class AddBookSuccess implements Action {
  readonly type = CollectionApiActionTypes.AddBookSuccess;

  constructor(public payload: Book) {}
}

export class AddBookFailure implements Action {
  readonly type = CollectionApiActionTypes.AddBookFailure;

  constructor(public payload: Book) {}
}

export class RemoveBookSuccess implements Action {
  readonly type = CollectionApiActionTypes.RemoveBookSuccess;

  constructor(public payload: Book) {}
}

export class RemoveBookFailure implements Action {
  readonly type = CollectionApiActionTypes.RemoveBookFailure;

  constructor(public payload: Book) {}
}

export class LoadBooksSuccess implements Action {
  readonly type = CollectionApiActionTypes.LoadBooksSuccess;

  constructor(public payload: Book[]) {}
}

export class LoadBooksFailure implements Action {
  readonly type = CollectionApiActionTypes.LoadBooksFailure;

  constructor(public payload: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type CollectionApiActionsUnion =
  | AddBookSuccess
  | AddBookFailure
  | RemoveBookSuccess
  | RemoveBookFailure
  | LoadBooksSuccess
  | LoadBooksFailure;
