import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Subject, Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AppUserAuth } from '../models/app-user-auth';
import { AppUser } from '../models/app-user';
import { LOGIN_MOCKS } from '../models/login-mocks';
import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { MemberXSystemService } from '../services/member-xsystem.service';
export interface INotifyChange{
  propName: string;
  value: any;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class SecurityService{
  private notify = new Subject<any>();
  public securityObject: AppUserAuth = new AppUserAuth();

  private _customer: Customer;
  public get customer(): Customer {
    return this._customer;
  }
  public set customer(v: Customer) {
    this._customer = v;
    const data: INotifyChange = {propName: 'customer', value: v};
    this.notifyChange(data);
  }

  notifyObservable$ = this.notify.asObservable();
  constructor(private dataService: MemberXSystemService) {
   }
  public notifyChange(data: any) {
    // if (this.isAuth && data)
    {
      this.notify.next(data);
    }
  }

  login(user: AppUser): Observable<AppUserAuth> {
    // Initialize security object
    this.resetSecurityObject();

    return this.dataService.auth(user).pipe(
        tap(resp => {
          // Use object assign to update the current object
          // NOTE: Don't create a new AppUserAuth object
          //       because that destroys all references to object
          Object.assign(this.securityObject, resp);
          this.securityObject.isAuthenticated = true;

          // Store into local storage
          localStorage.setItem('bearerToken',
            this.securityObject.access_token);
        }));
  }

  login_test(entity: AppUser): Observable<AppUserAuth> {
    this.resetSecurityObject();

    // Use object assign to update the current object
    // NOTE: Don't create a new AppUserAuth object
    //       because that destroys all references to object

    Object.assign(this.securityObject,
      LOGIN_MOCKS.find(user => user.user_name.toLowerCase() ===
                              entity.userName.toLowerCase()));
    if (this.securityObject.user_name !== '') {
      // Store into local storage
      localStorage.setItem('bearerToken', this.securityObject.access_token);
    }

    return of<AppUserAuth>(this.securityObject);
  }
  logout(): void {
    this.resetSecurityObject();
  }
  resetSecurityObject(): void {
    this.securityObject.user_name = '';
    this.securityObject.access_token = '';
    this.securityObject.isAuthenticated = false;
    this.securityObject.claims = '';

    localStorage.removeItem('bearerToken');
  }


  // This method can be called a couple of different ways
  // *hasClaim="'claimType'"  // Assumes claimValue is true
  // *hasClaim="['claimType1','claimType2','claimType3']"
  hasClaim(claimType: any) {
    let ret: boolean = false;
    if (!claimType) return true;
    
    // See if an array of values was passed in.
    if (typeof claimType === "string") {
      ret = this.isClaimValid(claimType);
    }
    else {
      let claims: string[] = claimType;
      if (claims) {
        for (let index = 0; index < claims.length; index++) {
          ret = this.isClaimValid(claims[index]);
          // If one is successful, then let them in
          if (ret) {
            break;
          }
        }
      }
    }

    return ret;
  }


  private isClaimValid(claimType: string): boolean {
    let ret: boolean = false;
    let auth: AppUserAuth = null;

    // Retrieve security object
    auth = this.securityObject;
    if (auth) {
        claimType = claimType.toLowerCase();
        const claims = ',' + auth.claims.toLowerCase() + ',';
        ret = (claims.indexOf( ',' + claimType + ',' ) >= 0);
    }

    return ret;
  }
}
