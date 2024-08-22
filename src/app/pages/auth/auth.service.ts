import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from 'src/app/configs/http-client-config-module/http-client.service';

import { IReqSignIn, IReqSignUp, IResSignIn } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClientService: HttpClientService) {}

  signIn(body: IReqSignIn): Observable<IResSignIn> {
    return this.httpClientService.post('auth/signin', body);
  }

  signUp(body: IReqSignUp) {
    return this.httpClientService.post('auth/signup', body);
  }
}
