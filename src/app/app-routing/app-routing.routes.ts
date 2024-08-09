import { Routes } from '@angular/router';
import { BookComponent } from '../book/book.component';
import { CartComponent } from '../cart/cart.component';
import { SinginComponent } from '../auth/singin/singin.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { AddBookComponent } from '../book/add-book/add-book.component';
import { ViewBookComponent } from '../book/view-book/view-book.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/book',
    pathMatch: 'full'
  },
  {
    path: 'book',
    title: 'book',
    component: BookComponent,
  },
  {
    path: 'book/add',
    title: 'Add Book',
    component: AddBookComponent,
  },
  {
    path: 'book/:id',
    title: 'View Detail Book',
    component: ViewBookComponent,
  },
  {
    path: 'cart',
    title: 'Cart',
    component: CartComponent,
  },
  {
    path: 'sign-in',
    title: 'Sign In',
    component: SinginComponent,
  },
  {
    path: 'sign-up',
    title: 'Sign Up',
    component: SignupComponent,
  },
];
