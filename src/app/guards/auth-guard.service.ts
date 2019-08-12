import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {


// tslint:disable-next-line: variable-name
  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._authService.isAuthenticated()) {
      // console.log(localStorage.role);
     
        return true;
     
    }
  
    // navigate to login page
    this._router.navigate(['/']);
    // window.location.href='/about';
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

}
