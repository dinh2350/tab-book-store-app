import { Component, DestroyRef, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { map, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ICart, ICartItem } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private destroyRef: DestroyRef
  ) {}
  isLoading: boolean = false;
  errorMessage: string = '';
  cartItems?: ICartItem[];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      const subscription = this.fetchCartById(id);
      this.destroyRef.onDestroy(() => {
        subscription.unsubscribe();
      });
    });
  }

  fetchCartById(id: number): Subscription {
    this.isLoading = true;
    return this.cartService
      .getCartById(id)
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
  }

  quantity: number = 1;
}
