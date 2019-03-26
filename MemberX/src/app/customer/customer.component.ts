import { Component, OnInit } from '@angular/core';
import { MemberXSystemService } from '../services/member-xsystem.service';
import { Customer } from '../models/customer.model';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer;
  constructor(private service: MemberXSystemService, private security: SecurityService) { }

  ngOnInit() {

  }

  search(input: HTMLInputElement) {
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
}
