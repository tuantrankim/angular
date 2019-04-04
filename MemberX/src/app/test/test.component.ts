import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-test',
  template: `
    <h1> Test </h1>
    <button class='btn btn-primary' (click) ='onClick()'>Click</button>
    <p>
      {{msg | json}}
    </p>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private securitySevice: SecurityService) { }
  msg = 'test message';
  ngOnInit() {
  }
  onClick(){
    this.msg = 'on click';

    this.securitySevice.getAll('data/authenticate').subscribe(response => this.msg = response as string
      , error => console.log(error)
      );
  }

}
