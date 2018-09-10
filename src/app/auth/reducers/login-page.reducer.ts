import { AuthActions, LoginPageActions, AuthApiActions } from "../actions";

export interface State {
  error: string | null;
  pending: boolean;
}

const initialState: State = {
  error: null,
  pending: false
};

export function reducer(
  state = initialState,
  action: AuthApiActions.AuthApiActionsUnion | LoginPageActions.LoginPageActionsUnion
): State {
  switch (action.type) {
    case LoginPageActions.LoginPageActionTypes.Login: {
        return {
            ...state,
            pending: true,
            error: null
        };
    }

    case AuthApiActions.AuthApiActionTypes.LoginSucess: {
        return {
            ...state,
            pending: false,
            error: null
        };
    }

    case AuthApiActions.AuthApiActionTypes.LoginFailure: {
        return {
            ...state,
            pending: false,
            error: action.payload.error
        };
    }

    default: {
      return state;
    }
  }
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
