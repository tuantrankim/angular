import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  public userName = '';
  public displayName = '';
  public customer: Customer;
  public isAuth = false;
  constructor() { }
}
