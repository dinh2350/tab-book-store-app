import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { HttpClientService } from 'src/app/configs/http-client-config-module/http-client.service';
import { IReqSignIn, IReqSignUp, IResSignIn, IResSignUp } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'token';

  constructor(private httpClientService: HttpClientService) {}

  signIn(body: IReqSignIn): Observable<IResSignIn> {
    return this.httpClientService.post('auth/signin', body);
  }

  signUp(body: IReqSignUp): Observable<IResSignUp> {
    return this.httpClientService.post('auth/signup', body);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    try {
      const decodedToken: any = jwtDecode(token);
      const expirationDate = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      return expirationDate > new Date();
    } catch (error) {
      console.error('Invalid token', error);
      return false;
    }
  }

  getUserRole(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.role;
    }
    return null;
  }
}
