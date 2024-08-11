import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

export const routes: Routes = [
  {
    path : '',
    component : BookComponent,
  },
  {
    path : 'add',
    component : AddBookComponent,
  },
  {
    path : ':id',
    component : ViewBookComponent,
  },
]

@NgModule({
  declarations: [
    BookComponent,
    AddBookComponent,
    ViewBookComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ]
})
export class BookModule { }
