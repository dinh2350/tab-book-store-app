import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class AdminBookService {
  private books: Book[] = [
    {
      id: 1,
      title: 'Book 1',
      image:
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026831-1901011410903.jpg',
      category: 'drama',
      quantity: 19,
      price: 20,
      description:
        'Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh',
    },
    {
      id: 1,
      title: 'Book 1',
      image:
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026831-1901011410903.jpg',
      category: 'drama',
      quantity: 19,
      price: 20,
      description:
        'Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh',
    },
    {
      id: 1,
      title: 'Book 1',
      image:
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026831-1901011410903.jpg',
      category: 'drama',
      quantity: 19,
      price: 20,
      description:
        'Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh',
    },
    {
      id: 1,
      title: 'Book 1',
      image:
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026831-1901011410903.jpg',
      category: 'drama',
      quantity: 19,
      price: 20,
      description:
        'Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh',
    },
    {
      id: 1,
      title: 'Book 1',
      image:
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026831-1901011410903.jpg',
      category: 'drama',
      quantity: 19,
      price: 20,
      description:
        'Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh',
    },
    {
      id: 1,
      title: 'Book 1',
      image:
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026831-1901011410903.jpg',
      category: 'drama',
      quantity: 19,
      price: 20,
      description:
        'Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh',
    },
    {
      id: 1,
      title: 'Book 1',
      image:
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026831-1901011410903.jpg',
      category: 'drama',
      quantity: 19,
      price: 20,
      description:
        'Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh',
    },
    {
      id: 1,
      title: 'Book 1',
      image:
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026831-1901011410903.jpg',
      category: 'drama',
      quantity: 19,
      price: 20,
      description:
        'Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh',
    },
    {
      id: 1,
      title: 'Book 1',
      image:
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026831-1901011410903.jpg',
      category: 'drama',
      quantity: 19,
      price: 20,
      description:
        'Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh',
    },
    {
      id: 1,
      title: 'Book 1',
      image:
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026831-1901011410903.jpg',
      category: 'drama',
      quantity: 19,
      price: 20,
      description:
        'Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh',
    },
    {
      id: 1,
      title: 'Book 1',
      image:
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026831-1901011410903.jpg',
      category: 'drama',
      quantity: 19,
      price: 20,
      description:
        'Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh',
    },
    {
      id: 1,
      title: 'Book 1',
      image:
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026831-1901011410903.jpg',
      category: 'drama',
      quantity: 19,
      price: 20,
      description:
        'Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh',
    },
    {
      id: 1,
      title: 'Book 1',
      image:
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026831-1901011410903.jpg',
      category: 'drama',
      quantity: 19,
      price: 20,
      description:
        'Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh',
    },
    {
      id: 1,
      title: 'Book 1',
      image:
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026831-1901011410903.jpg',
      category: 'drama',
      quantity: 19,
      price: 20,
      description:
        'Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh',
    },
    {
      id: 1,
      title: 'Book 1',
      image:
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026831-1901011410903.jpg',
      category: 'drama',
      quantity: 19,
      price: 20,
      description:
        'Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh',
    },
    {
      id: 1,
      title: 'Book 1',
      image:
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026831-1901011410903.jpg',
      category: 'drama',
      quantity: 19,
      price: 20,
      description:
        'Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh',
    },
    {
      id: 1,
      title: 'Book 1',
      image:
        'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-3300000026831-1901011410903.jpg',
      category: 'drama',
      quantity: 19,
      price: 20,
      description:
        'Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh',
    },
  ];

  private booksSubject = new BehaviorSubject<Book[]>(this.books);
  books$ = this.booksSubject.asObservable();

  getBooks() {
    return this.books;
  }

  addBook(book: Book) {
    book.id = this.books.length + 1;
    this.books.push(book);
    this.booksSubject.next(this.books);
  }

  updateBook(book: Book) {
    const index = this.books.findIndex((b) => b.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
      this.booksSubject.next(this.books);
    }
  }

  deleteBook(id: number) {
    this.books = this.books.filter((b) => b.id !== id);
    this.booksSubject.next(this.books);
  }
}
