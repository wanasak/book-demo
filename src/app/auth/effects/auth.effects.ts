import { LogoutConfirmationDialogComponent } from "./../components/logout-confirmation-dialog/logout-confirmation-dialog.component";
import { Credentials } from "./../models/user";
import { AuthService } from "./../services/auth.service";
import { Injectable } from "@angular/core";
import { map, exhaustMap, catchError, tap } from "rxjs/operators";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";
import { LoginPageActions, AuthApiActions, AuthActions } from "../actions";
import { of } from "rxjs";
import { MatDialog } from "@angular/material";

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType<LoginPageActions.Login>(LoginPageActions.LoginPageActionTypes.Login),
    map(action => action.payload.credentials),
    exhaustMap((auth: Credentials) =>
      this.authService.login(auth).pipe(
        map(user => new AuthApiActions.LoginSuccess({ user })),
        catchError(error => of(new AuthApiActions.LoginFailure({ error })))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthApiActions.AuthApiActionTypes.LoginSucess),
    tap(() => this.router.navigate(["/"]))
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(
      AuthApiActions.AuthApiActionTypes.LoginRedirect,
      AuthActions.AuthActionTypes.Logout
    ),
    tap(() => this.router.navigate(["/login"]))
  );

  @Effect({ dispatch: false })
  logoutConfirmation$ = this.actions$.pipe(
    ofType(AuthActions.AuthActionTypes.LogoutConfirmation),
    exhaustMap(() => {
      const dialogRef = this.dialog.open<
        LogoutConfirmationDialogComponent,
        undefined,
        boolean
      >(LogoutConfirmationDialogComponent);

      return dialogRef.afterClosed();
    }),
    map(
      result =>
        result
          ? new AuthActions.Logout()
          : new AuthActions.LogoutConfirmationDismiss()
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}
}
