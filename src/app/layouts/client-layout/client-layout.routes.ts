import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/common/guards/auth.guard';

export const clientLayoutRoutes: Routes = [
  {
    path: 'book',
    loadChildren: () =>
      import('src/app/pages/book/book.module').then((m) => m.BookModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('src/app/pages/cart/cart.module').then((m) => m.CartModule),
    canActivate: [AuthGuard],
  },
];
