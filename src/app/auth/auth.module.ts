import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SinginComponent } from './singin/singin.component';
import { SignupComponent } from './signup/signup.component';
import { Router, RouterModule } from '@angular/router';
import { authRoutes } from './auth.routes';

@NgModule({
  declarations: [AuthComponent, SinginComponent, SignupComponent],
  imports: [CommonModule, RouterModule.forChild(authRoutes)],
})
export class AuthModule {}
