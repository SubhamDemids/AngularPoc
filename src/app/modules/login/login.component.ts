import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  myForm!: FormGroup
  isSubmitClicked = false;
  constructor(private formBuilder: FormBuilder) {

    this.myForm = this.formBuilder.group({
      email: '',
      password:''
    });
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      signinemail:['', [Validators.required]],
      signinpassword: ['', [Validators.minLength(5)]],
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
    if (this.myForm.invalid) {
      const email = this.myForm.get('email')?.value;
      const password = this.myForm.get('password')?.value;
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    }  
  }
  onSignIn(){
    const email = this.myForm.get('signinemail')?.value;
    const password = this.myForm.get('signinpassword')?.value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
     console.log("Authentication sucesss")
    } else {
      console.log('Authentication failed');
    }
  }

}
