import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../services/security.service';
import { MemberXSystemService } from '../services/member-xsystem.service';
import { Customer } from '../models/customer.model';
import { longStackSupport } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  customer: Customer;
  constructor(private service: MemberXSystemService,
              public security: SecurityService,
              private router: Router) { }

  ngOnInit() {
  }

  search(input: HTMLInputElement) {
    // if(!this.security|| !this.security.isAuth){
    // }
    // customerID =  38362689
    this.customer = null;
    const request = {barcodeID: input.value};
    console.log('barcodeID', request);
    this.service.post('customer', request)
      .subscribe(data => {
        this.customer = data as Customer;
        this.security.customer = this.customer;
      });
  }

  logout(){
    this.security.isAuth = false;
    this.security.userName = "";
    this.security.displayName = "";
    this.security.customer = null;
    this.router.navigate(['/']);
  }
}
