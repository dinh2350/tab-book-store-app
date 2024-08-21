import { Routes } from '@angular/router';

export const authLayoutRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/pages/auth/auth.module').then((m) => m.AuthModule),
  },
];
