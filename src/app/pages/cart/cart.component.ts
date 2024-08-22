import { Component, DestroyRef, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { map } from 'rxjs';
import { ICartItem } from './cart.model';
import { OrderService } from './order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private destroyRef: DestroyRef
  ) {}
  isLoading: boolean = false;
  errorMessage: string = '';
  cartItems!: ICartItem[];

  ngOnInit(): void {
    this.fetchCartByUser();
  }

  fetchCartByUser(): void {
    this.isLoading = true;
    const subscription = this.cartService
      .getCartDetail()
      .pipe(map((result) => result.cartItems))
      .subscribe({
        next: (cart) => {
          this.cartItems = cart;
          this.isLoading = false;
        },
        error: (error) => {
          console.log(error);
          this.errorMessage = 'Failed to load cart';
          this.isLoading = false;
        },
      });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  totalAmount(): number {
    return this.cartItems.reduce(
      (total, cartItem) => (total += cartItem.quantity * cartItem.book.price),
      0
    );
  }

  handleCheckout(cartId: number) {
    this.orderService.checkout(cartId);
  }

  quantity: number = 1;
}
