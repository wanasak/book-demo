import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "../../books/models/book.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class GoogleBooksService {
  private API_PATH = "https://www.googleapis.com/books/v1/volumes";

  constructor(private http: HttpClient) {}

  searchBooks(queryTitle: string): Observable<Book[]> {
    return this.http
      .get<{ items: Book[] }>(`${this.API_PATH}?q=${queryTitle}`)
      .pipe(map(books => books.items || []));
  }

  retriveBook(volumeId: string): Observable<Book> {
    return this.http.get<Book>(`${this.API_PATH}/${volumeId}`);
  }
}
