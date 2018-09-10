import { Action } from "@ngrx/store";
import { Book } from "../models/book.model";

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum BooksApiActionTypes {
  SearchSuccess = "[BooksApi] SearchSuccess",
  SearchFailure = "[BooksApi] SearchFailure"
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class SearchSuccess implements Action {
  readonly type = BooksApiActionTypes.SearchSuccess;

  constructor(public payload: Book[]) {}
}

export class SearchFailure implements Action {
  readonly type = BooksApiActionTypes.SearchFailure;

  constructor(public payload: string) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type BooksApiActionsUnion = SearchSuccess | SearchFailure;
