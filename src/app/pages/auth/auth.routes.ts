import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SinginComponent } from './singin/singin.component';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: 'sign-up',
    component: SignupComponent,
  },
  {
    path: 'sign-in',
    component: SinginComponent,
  },
];
