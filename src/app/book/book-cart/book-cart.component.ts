import { Component, Input } from '@angular/core';
import { IBook } from '../book.model';

@Component({
  selector: 'app-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.scss'],
})
export class BookCartComponent {
  @Input({ required: true }) book?: IBook;
}
