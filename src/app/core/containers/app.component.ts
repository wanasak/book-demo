import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import * as fromRoot from "../../reducers";
import * as fromAuth from "../../auth/reducers";
import { Store, select } from "@ngrx/store";
import { AuthActions } from "../../auth/actions";
import { LayoutActions } from "../actions";

@Component({
  selector: "app-root",
  template: `
    <app-layout>
      <app-sidenav [open]="showSidenav$ | async" (closeMenu)="closeSidenav()">
        <app-nav-item (navigate)="closeSidenav()" *ngIf="loggedIn$ | async" routerLink="/" hint="View your book collection" icon="book">
          My Collection
        </app-nav-item>
        <app-nav-item (navigate)="closeSidenav()" *ngIf="loggedIn$ | async" routerLink="/books/find"
        hint="Find your next book!" icon="search">
          Browse books
        </app-nav-item>
        <app-nav-item (navigate)="closeSidenav()" *ngIf="!(loggedIn$ | async)">
          Sign In
        </app-nav-item>
        <app-nav-item (navigate)="logout()" *ngIf="loggedIn$ | async">
          Sign Out
        </app-nav-item>
      </app-sidenav>
      <app-toolbar (openMenu)="openSidenav()">
        Book Collection
      </app-toolbar>
      <router-outlet></router-outlet>
    </app-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.showSidenav$ = this.store.pipe(select(fromRoot.getShowSidenav));
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
  }

  closeSidenav() {
    this.store.dispatch(new LayoutActions.CloseSidenav());
  }

  openSidenav() {
    this.store.dispatch(new LayoutActions.OpenSidenav());
  }

  logout() {
    this.store.dispatch(new AuthActions.LogoutConfirmation());
  }
}
