import * as fromRoot from "../../reducers";
import * as fromAuth from "../reducers/auth.reducer";
import * as fromLoginPage from "../reducers/login-page.reducer";
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
import { AuthApiActions } from "../actions";

export interface AuthState {
  status: fromAuth.State;
  loginPage: fromLoginPage.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<
  AuthState,
  AuthApiActions.AuthApiActionsUnion
> = {
  status: fromAuth.reducer,
  loginPage: fromLoginPage.reducer
};


// Feature State - A method for returning a top level state
export const selectAuthState = createFeatureSelector<State, AuthState>("auth");

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);

export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);
export const getLoggedIn = createSelector(getUser, user => !!user);

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.loginPage
);

export const getLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);

export const getLoginPagePending = createSelector(
  selectLoginPageState,
  fromLoginPage.getPending
);
