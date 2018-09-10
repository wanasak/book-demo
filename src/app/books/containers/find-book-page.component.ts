import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store, select } from "@ngrx/store";

import * as fromBooks from "../reducers";
import { Observable } from "rxjs";
import { Book } from "../models/book.model";
import { take } from "rxjs/operators";
import { FindBookPageActions } from "../actions";

@Component({
  selector: "app-find-book-page",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-book-search
        [query]="query$ | async"
        [searching]="loading$ | async"
        [error]="error$ | async"
        (search)="search($event)"></app-book-search>
    <app-book-preview-list
        [books]="books$ | async">
    </app-book-preview-list>
  `
})
export class FindBookPageComponent {
  searchQuery$: Observable<string>;
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<fromBooks.State>) {
    this.searchQuery$ = store.pipe(
      select(fromBooks.getSearchQuery),
      take(1)
    );
    this.loading$ = store.pipe(select(fromBooks.getSearchLoading));
    this.error$ = store.pipe(select(fromBooks.getSearchError));
    this.books$ = store.pipe(select(fromBooks.getSearchResults));
  }

  search(query: string) {
    this.store.dispatch(new FindBookPageActions.SearchBooks(query));
  }
}
