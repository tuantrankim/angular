import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MemberXSystemService } from '../services/member-xsystem.service';
import { SecurityService } from '../services/security.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
  form = new FormGroup({
    login: new FormGroup({
      // form control
      username: new FormControl('', Validators.required),

      // form control
      password: new FormControl('', Validators.required)

    })
  });

  result;
  constructor(private service: MemberXSystemService, 
              private security: SecurityService,
              private route: ActivatedRoute,
              private router: Router) {
    // http.get('http://localhost:60559/api/security/')
    // .subscribe(response => console.log(response));
   }

  ngOnInit() {
  }

  onKeyUp($event){
    // debugger
    // console.log(this.form);
  }

  login() {
    const request = {userName: this.username.value, password: this.password.value};
    // console.log(request);
    this.service.post('security', request)
    .subscribe(response => {
      // console.log(response);
      if (!response) {
        this.result = 'Invalid login';
        // this.username.setErrors -- to set error for control level
        this.form.setErrors({
          invalidLogin: true
        });
      } else {
        this.result = response;
        this.security.displayName = this.result['name'];
        this.security.isAuth = true;
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        if(returnUrl) { this.router.navigate([returnUrl]); }
        else this.router.navigate(["/"]);
      }
    }
    );
    //console.log(this.form);
  }
/*
  login1() {
    const request = {userName: this.username.value, password: this.password.value};
    // console.log(request);
    this.http.post('http://localhost:60559/api/security/', request)
    .subscribe(response => {
        console.log(response);
        if (!response) {
        this.result = 'Invalid login';
        // this.username.setErrors -- to set error for control level
        this.form.setErrors({
          invalidLogin: true
        });
      } else {
        this.result = response;
      }
    }
    );
    console.log(this.form);
  }
  */
  get username() {
    return this.form.get('login.username');
  }

  get password() {
    return this.form.get('login.password');
  }
}
