import { Component, OnDestroy, ChangeDetectionStrategy } from "@angular/core";

import * as fromBooks from "../reducers";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { ViewBookPageActions } from "../actions";

@Component({
  selector: "app-view-book-page",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-selected-book-page></app-selected-book-page>
  `
})
export class ViewBookPageComponent implements OnDestroy {
  actionsSubscribe: Subscription;

  constructor(private store: Store<fromBooks.State>, route: ActivatedRoute) {
    this.actionsSubscribe = route.params
      .pipe(map(params => new ViewBookPageActions.SelectBook(params.id)))
      .subscribe(store);
  }

  ngOnDestroy() {
      this.actionsSubscribe.unsubscribe();
  }
}
