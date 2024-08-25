import { Subscription } from 'rxjs';
import { Component, DestroyRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Book } from './book.model';

import { AdminBookService } from './admin-book.service';
import { BookFormDialogComponent } from './book-form-dialog/book-form-dialog.component';
import { BookService } from '../book/book.service';

@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.scss'],
})
export class AdminBookComponent implements OnInit {
  isLoading: boolean = false;
  errorMessage: string = '';
  dataSource = new MatTableDataSource<Book>();
  displayedColumns: string[] = [
    'id',
    'title',
    'image',
    'category',
    'quantity',
    'price',
    'description',
    'actions',
  ];

  constructor(
    private bookService: BookService,
    private destroyRef: DestroyRef,
    private adminBookService: AdminBookService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchBooks();
    // this.adminBookService.books$.subscribe((books) => {
    //   this.dataSource.data = books;
    //   this.dataSource.paginator = this.paginator;
    // });
  }

  fetchBooks() {
    this.isLoading = true;
    const subscription = this.bookService.getBooks().subscribe({
      next: (books) => {
        this.dataSource.data = books.data;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.errorMessage = 'Failed to load books';
        this.isLoading = false;
      },
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  openBookDialog(book?: Book): void {
    const dialogRef = this.dialog.open(BookFormDialogComponent, {
      width: '500px',
      data: { book },
    });

    dialogRef.afterClosed().subscribe(() => {
      // this.adminBookService.books$.subscribe((books) => {
      //   this.dataSource.data = books;
      // });
      this.fetchBooks();
    });
  }

  deleteBook(id: number): void {
    const subscription = this.bookService.deleteBook(id).subscribe({
      next: (res) => {
        this.fetchBooks();
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.errorMessage = 'Failed to delete book';
        this.isLoading = false;
      },
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
