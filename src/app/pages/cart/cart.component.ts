import { Component, DestroyRef, OnInit } from '@angular/core';
import { CartService } from './cart.service';
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
  quantity: number = 1;
  isLoading: boolean = false;
  errorMessage: string = '';
  cartItems!: ICartItem[];
  cartId!: number;

  ngOnInit(): void {
    this.fetchCartByUser();
  }

  fetchCartByUser(): void {
    this.isLoading = true;
    const subscription = this.cartService.getCartDetail().subscribe({
      next: (result) => {
        this.cartId = result.id;
        this.cartItems = result.cartItems;
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

  handleCheckout() {
    this.isLoading = true;
    const subscription = this.orderService.checkout(this.cartId).subscribe({
      next: (res) => {
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load cart';
        this.isLoading = false;
      },
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
