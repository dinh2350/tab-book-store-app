import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Book } from './book.model';

import { AdminBookService } from './admin-book.service';
import { BookFormDialogComponent } from './book-form-dialog/book-form-dialog.component';

@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.scss'],
})
export class AdminBookComponent implements OnInit {
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private bookService: AdminBookService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.bookService.books$.subscribe((books) => {
      this.dataSource.data = books;
      this.dataSource.paginator = this.paginator;
    });
  }

  openBookDialog(book?: Book): void {
    const dialogRef = this.dialog.open(BookFormDialogComponent, {
      width: '500px',
      data: { book },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.bookService.books$.subscribe((books) => {
        this.dataSource.data = books;
      });
    });
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id);
  }
}
