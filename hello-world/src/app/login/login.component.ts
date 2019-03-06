import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    login: new FormGroup({
      // form control
      username: new FormControl('', Validators.required),

      // form control
      password: new FormControl('', Validators.required)

    })
  });

  result;
  constructor(private http: HttpClient) {
    // http.get('http://localhost:60559/api/security/')
    // .subscribe(response => console.log(response));
   }

  ngOnInit() {
  }

  onKeyUp($event){
    // debugger
    console.log(this.form);
  }
  login() {
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
  get username() {
    return this.form.get('login.username');
  }

  get password() {
    return this.form.get('login.password');
  }
}
