import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form = new FormGroup({
    oldPassword: new FormControl('',
    [
      Validators.required,      
    ],
      PasswordValidators.invalidPassword
    ),
    // we can add required validator in template instead
    newPassword: new FormControl('',
    [
      Validators.required,
      Validators.minLength(3)
    ]
    
    ),

    // we can add required validator in template instead
    confirmPassword: new FormControl('')
  },
  // extra validator
    PasswordValidators.passwordUnMatch
  );
  constructor() { }

  ngOnInit() {
  }

  get oldPassword(){
    return this.form.get('oldPassword');
  }

  get newPassword(){
    return this.form.get('newPassword');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

  changePassword(){
    console.log(this.form);
  }
}
