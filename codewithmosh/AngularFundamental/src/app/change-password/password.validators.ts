import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators{
    static invalidPassword(control: AbstractControl):Promise<ValidationErrors|null>{
        return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    if(control.value ==='123') resolve(null);
                    else resolve({invalidPassword:true});
                    }, 2000);
            });
    }
    
    static passwordUnMatch(control:AbstractControl): ValidationErrors|null{
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        console.log(control);
        if(newPassword.value !== confirmPassword.value) return {passwordUnMatch: true};
        else return null;
    }
}