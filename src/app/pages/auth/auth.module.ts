import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { authRoutes } from './auth.routes';
import { MatButtonModule } from '@angular/material/button';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/signup.component';
import { SinginComponent } from './singin/singin.component';

@NgModule({
  declarations: [AuthComponent, SinginComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class AuthModule {}
