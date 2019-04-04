import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { SecurityService } from '../security/security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private security: SecurityService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let claimType: string = route.data["claimType"];

    if (this.security.securityObject.isAuthenticated
      && this.security.hasClaim(claimType)) {
         return true;
    } else {
      this.router.navigate(['/login'], {queryParams:{returnUrl: state.url}});
      return false;
    }
  }
}
