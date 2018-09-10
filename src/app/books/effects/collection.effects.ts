import { Injectable } from "@angular/core";
import { Observable, defer, of } from "rxjs";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Database } from "@ngrx/db";

import { CollectionPageActions, CollectionApiActions, SelectedBookPageActions } from "../actions";
import { switchMap, toArray, catchError, map, mergeMap } from "rxjs/operators";
import { Book } from "../models/book.model";

@Injectable()
export class CollectionEffects {
  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    return this.db.open("books_app");
  });

  @Effect()
  loadCollection$: Observable<Action> = this.actions$.pipe(
    ofType(CollectionPageActions.CollectionPageActionTypes.LoadCollection),
    switchMap(() =>
      this.db.query("books").pipe(
        toArray(),
        map(
          (books: Book[]) => new CollectionApiActions.LoadBooksSuccess(books)
        ),
        catchError(error =>
          of(new CollectionApiActions.LoadBooksFailure(error))
        )
      )
    )
  );

  @Effect()
  addBookToCollection$ = this.actions$.pipe(
      ofType<SelectedBookPageActions.AddBook>(SelectedBookPageActions.SelectedBookPageActionTypes.AddBook),
      map(action => action.payload),
      mergeMap(book => this.db.insert("books", [book]).pipe(
          map(() => new CollectionApiActions.AddBookSuccess(book)),
          catchError(() => of(new CollectionApiActions.AddBookFailure(book)))
      ))
  );

  @Effect()
  removeBookFromCollection$ = this.actions$.pipe(
      ofType<SelectedBookPageActions.RemoveBook>(SelectedBookPageActions.SelectedBookPageActionTypes.RemoveBook),
      map(action => action.payload),
      mergeMap(book => this.db.executeWrite("books", "delete", [book.id]).pipe(
          map(() => new CollectionApiActions.RemoveBookSuccess(book)),
          catchError(error => of(new CollectionApiActions.RemoveBookFailure(book)))
      ))
  );

  constructor(private actions$: Actions, private db: Database) {}
}
