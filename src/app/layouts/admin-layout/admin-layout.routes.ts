import { Routes } from '@angular/router';
import { AdminBookComponent } from 'src/app/pages/admin-book/admin-book.component';

export const adminLayoutRoutes: Routes = [
  {
    path: 'book',
    component: AdminBookComponent,
  },
];
