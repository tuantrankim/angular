import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../services/security.service';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  constructor(public security: SecurityService) { 
  }

  ngOnInit() {
  }

}
