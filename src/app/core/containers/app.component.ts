import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import * as fromRoot from "../../reducers";
import * as fromAuth from "../../auth/reducers";
import { Store, select } from "@ngrx/store";
import { AuthActions } from "../../auth/actions";

@Component({
  selector: "app-root",
  template: `
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
  }

  logout() {
    this.store.dispatch(new AuthActions.LogoutConfirmation());
  }
}
