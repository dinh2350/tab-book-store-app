import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { RouterModule } from '@angular/router';
import { clientLayoutRoutes } from './client-layout.routes';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [ClientLayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(clientLayoutRoutes),
    MatToolbarModule,
  ],
})
export class ClientLayoutModule {}
