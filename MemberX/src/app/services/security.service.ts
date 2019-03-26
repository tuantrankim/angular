import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Subject } from 'rxjs';

export interface INotifyChange{
  propName: string;
  value: any;
}

@Injectable({
  providedIn: 'root'
})

export class SecurityService {
  public userName = '';
  public displayName = '';
  public isAuth = false;
  private notify = new Subject<any>();
  
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
  constructor() { }
  public notifyChange(data: any) {
    // if (this.isAuth && data)
    {
      this.notify.next(data);
    }
  }
}
