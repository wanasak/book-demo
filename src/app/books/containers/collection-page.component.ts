import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store, select } from "@ngrx/store";

import * as fromBooks from "../reducers";
import { Observable } from "rxjs";
import { Book } from "../models/book.model";
import { CollectionPageActions } from "../actions";

@Component({
  selector: "app-collection-page",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card>
        <mat-card-title>My Collection</mat-card-title>
    </mat-card>

    <app-book-preview-list
        [books]="books$ | async">
    </app-book-preview-list>
  `,
  styles: [
    `
      mat-card-title {
        display: flex;
        justify-content: center;
      }
    `
  ]
})
export class CollectionPageComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private store: Store<fromBooks.State>) {
    this.books$ = store.pipe(select(fromBooks.getBookCollection));
  }

  ngOnInit() {
    this.store.dispatch(new CollectionPageActions.LoadCollection());
  }
}
