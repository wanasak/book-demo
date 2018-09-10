import { Inject, Injectable, InjectionToken, Optional } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { asyncScheduler, EMPTY as empty, Observable, of } from "rxjs";
import {
  catchError,
  debounceTime,
  map,
  skip,
  switchMap,
  takeUntil
} from "rxjs/operators";
import { FindBookPageActions, BooksApiActions } from "../actions";
import { Book } from "../models/book.model";
import { GoogleBooksService } from "../../core/services/google-books.service";

@Injectable()
export class BookEffects {
  @Effect()
  search$ = ({ debounce = 300, scheduler = asyncScheduler } = {}): Observable<
    Action
  > =>
    this.actions$.pipe(
      ofType<FindBookPageActions.SearchBooks>(
        FindBookPageActions.FindBookPageActionTypes.SearchBooks
      ),
      debounceTime(debounce, scheduler),
      map(action => action.payload),
      switchMap(query => {
        if (query === "") {
          return empty;
        }

        const nextSearch$ = this.actions$.pipe(
          ofType(FindBookPageActions.FindBookPageActionTypes.SearchBooks),
          skip(1)
        );

        return this.googleBooks.searchBooks(query).pipe(
          takeUntil(nextSearch$),
          map((books: Book[]) => new BooksApiActions.SearchSuccess(books)),
          catchError(err => of(new BooksApiActions.SearchFailure(err)))
        );
      })
    )

  constructor(
    private actions$: Actions,
    private googleBooks: GoogleBooksService
  ) {}
}
