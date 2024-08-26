import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/pages/auth/auth.service';
import { USER_ROLES } from '../enums/user.enum';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      this.authService.isAuthenticated() &&
      this.authService.getUserRole() === USER_ROLES.ADMIN
    ) {
      return true;
    } else {
      this.router.navigate(['/auth']); // Redirect to login if not authenticated or not admin
      return false;
    }
  }
}
