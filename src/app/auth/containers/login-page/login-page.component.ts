import { Component, OnInit } from "@angular/core";
import * as fromAuth from "../../reducers";
import { Store, select } from "@ngrx/store";
import { Credentials } from "../../models/user";
import { LoginPageActions } from "../../actions";

@Component({
  selector: "app-login-page",
  template: `
    <app-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async"
    ></app-login-form>
  `
})
export class LoginPageComponent implements OnInit {
  pending$ = this.store.pipe(select(fromAuth.getLoginPagePending));
  error$ = this.store.pipe(select(fromAuth.getLoginPageError));

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {}

  onSubmit(credentials: Credentials) {
    this.store.dispatch(new LoginPageActions.Login({ credentials }));
  }
}
