import {
  SelectedBookPageActions,
  CollectionApiActions,
  CollectionPageActions
} from "src/app/books/actions";

export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}
const initialState: State = {
  loaded: false,
  loading: false,
  ids: []
};

export function reducer(
  state = initialState,
  action:
    | SelectedBookPageActions.SelectedBookPageActionsUnion
    | CollectionApiActions.CollectionApiActionsUnion
    | CollectionPageActions.CollectionPageActionsUnion
): State {
  switch (action.type) {
    case CollectionPageActions.CollectionPageActionTypes.LoadCollection: {
      return {
        ...state,
        loading: true
      };
    }

    case CollectionApiActions.CollectionApiActionTypes.LoadBooksSuccess: {
        return {
            ...state,
            loading: false,
            loaded: true,
            ids: action.payload.map(book => book.id)
        };
    }

    case CollectionApiActions.CollectionApiActionTypes.AddBookSuccess:
    case CollectionApiActions.CollectionApiActionTypes.RemoveBookFailure: {
        if (state.ids.indexOf(action.payload.id) > -1) {
            return state;
        }

        return {
            ...state,
            ids: [...state.ids, action.payload.id]
        };
    }

    case CollectionApiActions.CollectionApiActionTypes.RemoveBookSuccess:
    case CollectionApiActions.CollectionApiActionTypes.AddBookFailure: {
        return {
            ...state,
            ids: state.ids.filter(id => id !== action.payload.id)
        };
    }

    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getIds = (state: State) => state.ids;
