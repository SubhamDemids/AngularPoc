import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  signUpForm!: FormGroup
  signInForm!: FormGroup
  isSubmitClicked = false;
  constructor(private formBuilder: FormBuilder) {

    this.signUpForm = this.formBuilder.group({
      email: '',
      password:''
    });
    
    this.signInForm = this.formBuilder.group({
      signinemail: '',
      signinpassword:''
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

    this.signInForm=this.formBuilder.group({
      signinemail:['', [Validators.required]],
      signinpassword: ['', [Validators.required]],
    })

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
  onSignIn(){
    const signInEmail = this.signInForm.get('signinemail')?.value;
    const signInPassword = this.signInForm.get('signinpassword')?.value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password')

    if (signInEmail === storedEmail && signInPassword === storedPassword) {
     console.log("Authentication sucesss")
    } else {
      console.log('Authentication failed');
    }
  }

}
