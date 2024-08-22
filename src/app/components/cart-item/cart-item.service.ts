import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from 'src/app/configs/http-client-config-module/http-client.service';
import { FindResponseType } from 'src/app/common/types/http.type';
import { ICartItem } from 'src/app/pages/cart/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartItemService {
  constructor(private httpClientService: HttpClientService) {}

  getCartItems(): Observable<FindResponseType<ICartItem[]>> {
    return this.httpClientService.get<FindResponseType<ICartItem[]>>(
      'cart-items'
    );
  }

  getCartItemById(id: number): Observable<ICartItem> {
    return this.httpClientService.get<ICartItem>(`cart-items/${id}`);
  }

  createCartItem(cartItem: ICartItem): Observable<ICartItem> {
    return this.httpClientService.post<ICartItem>('cart-items', cartItem);
  }

  updateCartItem(
    id: number,
    cartItem: Partial<ICartItem>
  ): Observable<ICartItem> {
    return this.httpClientService.put<ICartItem>(`cart-items/${id}`, cartItem);
  }

  deleteCartItem(id: number): Observable<void> {
    return this.httpClientService.delete<void>(`cart-items/${id}`);
  }
}
