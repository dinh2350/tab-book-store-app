import { Component, DestroyRef, OnInit } from '@angular/core';
import { EnumBookCategory, IBook } from './book.model';
import { BookService } from './book.service';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private destroyRef: DestroyRef
  ) {}
  isLoading: boolean = false;
  errorMessage: string = '';
  books?: IBook[];

  ngOnInit(): void {
    const subscription = this.fetchBooks();
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  fetchBooks(): Subscription {
    this.isLoading = true;
    return this.bookService
      .getBooks()
      .pipe(map((result) => result.data))
      .subscribe({
        next: (books) => {
          this.books = books;
          this.isLoading = false;
        },
        error: (error) => {
          console.log(error);
          this.errorMessage = 'Failed to load users';
          this.isLoading = false;
        },
      });
  }
}
