import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from 'src/app/configs/http-client-config-module/http-client.service';
import { FindResponseType } from 'src/app/common/types/http.type';
import { ICart } from './cart.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private httpClientService: HttpClientService) {}

  getCarts(): Observable<FindResponseType<ICart[]>> {
    return this.httpClientService.get<FindResponseType<ICart[]>>('carts');
  }

  getCartById(id: number): Observable<ICart> {
    return this.httpClientService.get<ICart>(`carts/${id}`);
  }

  getCartDetail(): Observable<ICart> {
    return this.httpClientService.get<ICart>(`carts/detail`);
  }

  createCart(cart: ICart): Observable<ICart> {
    return this.httpClientService.post<ICart>('carts', cart);
  }

  addItemToCart(bookId: number, quantity: number): Observable<ICart> {
    return this.httpClientService.post<ICart>('carts/add-book', {
      bookId,
      quantity,
    });
  }

  updateCart(id: number, cart: ICart): Observable<ICart> {
    return this.httpClientService.put<ICart>(`carts/${id}`, cart);
  }

  deleteCart(id: number): Observable<void> {
    return this.httpClientService.delete<void>(`carts/${id}`);
  }
}
