import { Routes } from '@angular/router';
import { CartComponent } from './cart.component';

export const cartRoutes: Routes = [
  {
    path: ':id',
    component: CartComponent,
  },
];
