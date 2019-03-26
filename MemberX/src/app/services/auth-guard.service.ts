import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private security: SecurityService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    if (this.security && this.security.isAuth) { return true; }

    this.router.navigate(['/login'], {queryParams:{returnUrl: state.url}});
    return false;
  }
}
