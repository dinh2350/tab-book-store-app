import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from 'src/app/configs/http-client-config-module/http-client.service';
import { ICart } from './cart.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private httpClientService: HttpClientService) {}

  checkout(cartId: number): Observable<ICart> {
    return this.httpClientService.post<ICart>('/orders/checkout', { cartId });
  }
}
