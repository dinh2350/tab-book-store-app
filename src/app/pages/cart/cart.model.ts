import { IBook } from '../book/book.model';

export interface ICartItem {
  id: number;
  cartId: number;
  book: IBook;
  quantity: number;
}

export interface ICart {
  id: number;
  cartItems: ICartItem[];
}
