import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{
  signUpForm!: FormGroup
  isSubmitClicked = false;

  constructor(private formBuilder: FormBuilder) {

    this.signUpForm = this.formBuilder.group({
      email: '',
      password:''
    });
  }
  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: this.passwordMatchValidator
    }
    );
  }
  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');
   
    if (passwordControl?.value !== confirmPasswordControl?.value) {
      confirmPasswordControl?.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl?.setErrors(null);
    }
  }
  onSignUp() {
    this.isSubmitClicked = true;
    if (this.signUpForm.valid) {
      const signUpEmail = this.signUpForm.get('email')?.value;
      const signUpPassword = this.signUpForm.get('password')?.value;
      localStorage.setItem('email', signUpEmail);
      localStorage.setItem('password',signUpPassword);
    }  
  }
}
