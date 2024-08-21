import { IBook } from '../book/book.model';

export interface ICartItem {
  cartId: number;
  book: IBook;
  quantity: number;
}

export interface ICart {
  cartItems: ICartItem[];
}
