import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminBookComponent } from 'src/app/pages/admin-book/admin-book.component';
import { RouterModule } from '@angular/router';
import { adminLayoutRoutes } from './admin-layout.routes';

@NgModule({
  declarations: [AdminLayoutComponent, AdminBookComponent],
  imports: [CommonModule, RouterModule.forChild(adminLayoutRoutes)],
})
export class AdminLayoutModule {}
