import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService  } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(
    private router: Router,
    private authService: AuthService
) {}


  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      const currentUser = this.authService.currentUserValue;

      if (currentUser.id) {
          return true;
      }
      
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
  }
  
}
