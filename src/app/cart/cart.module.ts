import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

import { CartComponent } from './cart.component';
import { cartRoutes } from './cart.routes';
import { ShareModule } from 'src/share/share.module';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(cartRoutes),
    MatCheckboxModule,
    MatCardModule,
  ],
})
export class CartModule {}
