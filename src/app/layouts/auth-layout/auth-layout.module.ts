import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout.component';
import { RouterModule } from '@angular/router';
import { authLayoutRoutes } from './auth-layout.routes';

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [CommonModule, RouterModule.forChild(authLayoutRoutes)],
})
export class AuthLayoutModule {}
