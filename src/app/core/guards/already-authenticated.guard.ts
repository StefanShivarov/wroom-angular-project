import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AlreadyAuthenticatedGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLoggedIn$.pipe(take(1), map(isLoggedIn => {
      if(!localStorage.getItem('currentUser')){
        console.log('is logged in '+isLoggedIn);
        return true;
        
      }
      console.log('is logged in '+ isLoggedIn);
      return this.router.createUrlTree(['/']);
    }));
  }
  
}
