import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../book.model';
import { AdminBookService } from '../admin-book.service';

@Component({
  selector: 'app-book-form-dialog',
  templateUrl: './book-form-dialog.component.html',
  styleUrls: ['./book-form-dialog.component.scss'],
})
export class BookFormDialogComponent implements OnInit {
  bookForm!: FormGroup;
  selectedBook: Book | null;

  constructor(
    private fb: FormBuilder,
    private bookService: AdminBookService,
    public dialogRef: MatDialogRef<BookFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { book: Book | null }
  ) {
    this.selectedBook = data.book;
  }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: [this.selectedBook?.title || '', Validators.required],
      image: [this.selectedBook?.image || '', Validators.required],
      category: [this.selectedBook?.category || '', Validators.required],
      quantity: [
        this.selectedBook?.quantity || 0,
        [Validators.required, Validators.min(0)],
      ],
      price: [
        this.selectedBook?.price || 0,
        [Validators.required, Validators.min(0)],
      ],
      description: [this.selectedBook?.description || '', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      if (this.selectedBook) {
        const updatedBook = { ...this.selectedBook, ...this.bookForm.value };
        this.bookService.updateBook(updatedBook);
      } else {
        this.bookService.addBook(this.bookForm.value);
      }
      this.dialogRef.close();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
