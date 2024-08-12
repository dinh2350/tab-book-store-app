import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BookComponent } from './book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { BookCartComponent } from '../../components/book-cart/book-cart.component';

export const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'add',
    component: AddBookComponent,
  },
  {
    path: ':id',
    component: ViewBookComponent,
  },
];

@NgModule({
  declarations: [
    BookComponent,
    AddBookComponent,
    ViewBookComponent,
    BookCartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class BookModule {}
