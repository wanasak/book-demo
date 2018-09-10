import { EntityAdapter, createEntityAdapter, EntityState } from "@ngrx/entity";

import { Book } from "../models/book.model";
import {
  BooksApiActions,
  BookActions,
  ViewBookPageActions,
  CollectionApiActions
} from "../actions";

export interface State extends EntityState<Book> {
  selectedBookId: string | null;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>({
  selectId: (book: Book) => book.id,
  sortComparer: false
});

const initialState: State = adapter.getInitialState({
  selectedBookId: null
});

export function reducer(
  state = initialState,
  action:
    | BooksApiActions.BooksApiActionsUnion
    | BookActions.BookActionsUnion
    | ViewBookPageActions.ViewBookPageActionsUnion
    | CollectionApiActions.CollectionApiActionsUnion
): State {
  switch (action.type) {
    case BooksApiActions.BooksApiActionTypes.SearchSuccess:
    case CollectionApiActions.CollectionApiActionTypes.LoadBooksSuccess: {
      return adapter.addMany(action.payload, state);
    }

    case BookActions.BookActionTypes.LoadBook: {
      return adapter.addOne(action.payload, state);
    }

    case ViewBookPageActions.ViewBookPageActionTypes.SelectBook: {
      return {
        ...state,
        selectedBookId: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedBookId;
