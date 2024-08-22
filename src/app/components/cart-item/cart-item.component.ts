import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartItem } from 'src/app/pages/cart/cart.model';
import { CartItemService } from './cart-item.service';
import { CartService } from 'src/app/pages/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  constructor(
    private cartItemService: CartItemService,
    private cartService: CartService
  ) {}
  @Input({ required: true }) cartItem!: ICartItem;
  @Output() deleteCartItemEvent = new EventEmitter<string>();

  handleDeleteCartItem() {
    if (this.cartItem?.id) {
      this.cartItemService.deleteCartItem(this.cartItem.id).subscribe(() => {
        this.deleteCartItemEvent.emit();
      });
    }
  }

  handleQuantityChange(quantity: number) {
    this.cartItemService
      .updateCartItem(this.cartItem.id, { quantity })
      .subscribe();
  }
}
