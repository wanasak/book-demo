import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Book } from "../models/book.model";

@Component({
  selector: "app-book-detail",
  template: `
        <mat-card *ngIf="book">
            <mat-card-title-group>
                <mat-card-title>{{ title }}</mat-card-title>
                <mat-card-subtitle *ngIf="subTitle">{{ subTitle }}</mat-card-subtitle>
                <img mat-card-sm-image *ngIf="thumbnail" [src]="thumbnail" />
            </mat-card-title-group>
            <mat-card-content>
                <p [innerHTML]="description"></p>
            </mat-card-content>
            <mat-card-footer>
                <app-book-authors [book]="book"></app-book-authors>
            </mat-card-footer>
            <mat-card-actions align="start">
                <button mat-raised-button color="warn" *ngIf="inCollection" (click)="remove.emit(book)">Remove Book from Collection</button>
                <button mat-raised-button color="primary" *ngIf="!inCollection" (click)="add.emit(book)">Add Book to Collection</button>
            </mat-card-actions>
        </mat-card>
    `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        margin: 75px 0;
      }
      mat-card {
        max-width: 600px;
      }
      mat-card-title-group {
        margin-left: 0;
      }
      img {
        width: 60px;
        min-width: 60px;
        margin-left: 5px;
      }
      mat-card-content {
        margin: 15px 0 50px;
      }
      mat-card-actions {
        margin: 25px 0 0 !important;
      }
      mat-card-footer {
        padding: 0 25px 25px;
        position: relative;
      }
    `
  ]
})
export class BookDetailComponent {
  @Input()
  book: Book;
  @Input()
  inCollection: boolean;
  @Output()
  add = new EventEmitter<Book>();
  @Output()
  remove = new EventEmitter<Book>();

  /**
   * Utilize getters to keep templates clean
   */
  get id() {
    return this.book.id;
  }

  get title() {
    return this.book.volumeInfo.title;
  }

  get subTitle() {
    return this.book.volumeInfo.subtitle;
  }

  get description() {
    return this.book.volumeInfo.description;
  }

  get thumbnail() {
    return (
      this.book.volumeInfo.imageLinks &&
      this.book.volumeInfo.imageLinks.smallThumbnail &&
      this.book.volumeInfo.imageLinks.smallThumbnail.replace("http", "")
    );
  }
}
