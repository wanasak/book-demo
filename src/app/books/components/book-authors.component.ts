import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
    selector: 'app-book-authors',
    template: `
        <h5 mat-subheader>Written By:</h5>
        <span>
            {{ authors | bcAddCommas }}
        </span>
    `,
    styles: [`
        h5 {
            margin-bottom: 5px;
        }
    `]
})

export class BookAuthorsComponent {
    @Input() book: Book;

    get authors() {
        return this.book.volumeInfo.authors;
    }
}
