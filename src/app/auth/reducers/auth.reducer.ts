import { User } from "./../models/user";
import { AuthActions, AuthApiActions } from "../actions";

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null
};

export function reducer(
  state = initialState,
  action: AuthApiActions.AuthApiActionsUnion | AuthActions.AuthActionsUnion
): State {
  switch (action.type) {
    case AuthApiActions.AuthApiActionTypes.LoginSucess: {
      return {
        ...state,
        user: action.payload.user
      };
    }

    case AuthActions.AuthActionTypes.Logout: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getUser = (state: State) => state.user;
