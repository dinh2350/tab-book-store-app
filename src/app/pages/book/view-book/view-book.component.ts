import { Component, DestroyRef, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Subscription } from 'rxjs';
import { IBook } from '../book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../cart/cart.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss'],
})
export class ViewBookComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private destroyRef: DestroyRef
  ) {}

  book?: IBook;

  isLoading: boolean = false;
  errorMessage: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      const subscription = this.fetchBookById(id);
      this.destroyRef.onDestroy(() => {
        subscription.unsubscribe();
      });
    });
  }

  fetchBookById(id: number): Subscription {
    this.isLoading = true;
    return this.bookService.getBookById(id).subscribe({
      next: (book) => {
        this.book = book;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.errorMessage = 'Failed to load book';
        this.isLoading = false;
      },
    });
  }

  handleAddBookToCart() {
    if (this.authService.isAuthenticated()) {
      if (this.book?.id && this.book?.quantity)
        this.cartService.addItemToCart(this.book.id, this.quantity).subscribe();
    } else {
      this.router.navigate(['/auth/sign-in']);
    }
  }

  quantity: number = 1;

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
