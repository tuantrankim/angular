import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UsernameValidators } from './username.validators';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({

          // form control
        username: new FormControl('',
        // non async validator
        [
          Validators.required,
          Validators.minLength(3),
          UsernameValidators.cannotContainSpace
        ],
        // Async validator example
        UsernameValidators.shouldBeUnique
      ),

      // form control
      password: new FormControl('', Validators.required)

    })
  });

  login() {
    console.log(this.form);
    // let isValid = authService.login(this.form.value);
    const isValid = false;
    if (!isValid) {
      // this.username.setErrors -- to set error for control level
      this.form.setErrors({
        invalidLogin: true
      });
    }
  }
  get username() {
    return this.form.get('account.username');
  }
}

