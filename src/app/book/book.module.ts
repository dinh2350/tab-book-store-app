import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewBookComponent } from './view-book/view-book.component';



@NgModule({
  declarations: [
    BookComponent,
    AddBookComponent,
    ViewBookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookModule { }
