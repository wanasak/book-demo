import * as fromRoot from "../../reducers";
import * as fromBooks from "./books.reducer";
import * as fromSearch from "./search.reducer";
import * as fromCollection from "./collection.reducer";
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

export interface BooksState {
  search: fromSearch.State;
  books: fromBooks.State;
  collection: fromCollection.State;
}

export interface State extends fromRoot.State {
  books: BooksState;
}

export const reducers: ActionReducerMap<BooksState, any> = {
  search: fromSearch.reducer,
  books: fromBooks.reducer,
  collection: fromCollection.reducer
};

// Feature Selector
export const getBooksState = createFeatureSelector<State, BooksState>("books");

// Books Selector
export const getBookEntitiesState = createSelector(
  getBooksState,
  state => state.books
);

export const getSelectedBookId = createSelector(
  getBookEntitiesState,
  fromBooks.getSelectedId
);

/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reduces boilerplate
 * in selecting records from the entity state.
 */
export const {
  selectIds: getBookIds,
  selectEntities: getBookEntities,
  selectAll: getAllBooks,
  selectTotal: getTotalBooks
} = fromBooks.adapter.getSelectors(getBookEntitiesState);

export const getSelectedBook = createSelector(
  getBookEntities,
  getSelectedBookId,
  (books, selectedId) => {
    return selectedId && books[selectedId];
  }
);

// Search Selector
export const getSearchState = createSelector(
  getBooksState,
  state => state.search
);

export const getSearchBookIds = createSelector(
  getSearchState,
  fromSearch.getIds
);

export const getSearchLoading = createSelector(
  getSearchState,
  fromSearch.getLoading
);

export const getSearchError = createSelector(
  getSearchState,
  fromSearch.getError
);

export const getSearchQuery = createSelector(
  getSearchState,
  fromSearch.getQuery
);

/**
 * Some selector functions creata joins across parts of state. This
 * selector compose the search result IDs to return an array of books in the store
 */
export const getSearchResults = createSelector(
  getBookEntities,
  getSearchBookIds,
  (books, searchIds) => {
    return searchIds.map(id => books[id]);
  }
);

// Collection Selector
export const getCollectionState = createSelector(
  getBooksState,
  state => state.collection
);

export const getCollectionLoaded = createSelector(
  getCollectionState,
  fromCollection.getLoaded
);

export const getCollectionLoading = createSelector(
  getCollectionState,
  fromCollection.getLoading
);

export const getCollectionBookIds = createSelector(
  getCollectionState,
  fromCollection.getIds
);

export const getBookCollection = createSelector(
  getBookEntities,
  getCollectionBookIds,
  (books, ids) => {
    return ids.map(id => books[id]);
  }
);

export const isSelectedBookInCollection = createSelector(
  getCollectionBookIds,
  getSelectedBookId,
  (ids, selectedId) => {
    return selectedId && ids.indexOf(selectedId) > -1;
  }
);
