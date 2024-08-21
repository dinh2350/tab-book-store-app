import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './book.model';
import { HttpClientService } from 'src/app/configs/http-client-config-module/http-client.service';
import { FindResponseType } from 'src/app/common/types/http.type';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClientService: HttpClientService) {}

  getBooks(): Observable<FindResponseType<IBook[]>> {
    return this.httpClientService.get<FindResponseType<IBook[]>>('books');
  }

  getBookById(id: number): Observable<IBook> {
    return this.httpClientService.get<IBook>(`books/${id}`);
  }

  createBook(book: IBook): Observable<IBook> {
    return this.httpClientService.post<IBook>('books', book);
  }

  updateBook(id: number, book: IBook): Observable<IBook> {
    return this.httpClientService.put<IBook>(`books/${id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.httpClientService.delete<void>(`books/${id}`);
  }
}
