import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../models/book.model";
import { Store, select } from "@ngrx/store";
import * as fromBooks from "../reducers";
import { SelectedBookPageActions } from "../actions";

@Component({
  selector: "app-selected-book-page",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-book-detail
        [book]="book$ | async"
        [inCollection]="isSelectedBookInCollection$ | async"
        (add)="addToCollection($event)"
        (remove)="removeFromCollection($event)">
    </app-book-detail>
  `
})
export class SelectedBookPageComponent {
  book$: Observable<Book>;
  isSelectedBookInCollection$: Observable<boolean>;

  constructor(private store: Store<fromBooks.State>) {
    this.book$ = store.pipe(select(fromBooks.getSelectedBook));
    this.isSelectedBookInCollection$ = store.pipe(
      select(fromBooks.isSelectedBookInCollection)
    );
  }

  addToCollection(book: Book) {
    this.store.dispatch(new SelectedBookPageActions.AddBook(book));
  }

  removeFromCollection(book: Book) {
    this.store.dispatch(new SelectedBookPageActions.RemoveBook(book));
  }
}
