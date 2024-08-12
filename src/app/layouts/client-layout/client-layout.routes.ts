import { Routes } from '@angular/router';

export const clientLayoutRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/book',
  //   pathMatch: 'full',
  // },
  {
    path: 'book',
    loadChildren: () =>
      import('src/app/pages/book/book.module').then((m) => m.BookModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('src/app/pages/cart/cart.module').then((m) => m.CartModule),
  },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  // },
];
