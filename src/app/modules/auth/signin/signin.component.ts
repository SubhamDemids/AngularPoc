import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{
  
  signInForm!: FormGroup
  
  isSubmitClicked=false
  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.signInForm = this.formBuilder.group({
      email: '',
      password:''
    });

  }
  
  ngOnInit() {
    this.signInForm=this.formBuilder.group({
      email:['', [Validators.required]],
      password: ['', [Validators.required]],
    },
    )
  }
  onSignIn(){
 
    this.isSubmitClicked = true;
    if(this.signInForm.invalid){
      return;
    }
    const signInEmail = this.signInForm.get('email')?.value;
    const signInPassword = this.signInForm.get('password')?.value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password')

    if (signInEmail === storedEmail && signInPassword === storedPassword) {
      this.router.navigate(['/contactlist']);
     console.log("Authentication sucesss")
    } else {
      this.signInForm.controls['password'].setErrors({ incorrectCredentials: true });
      
      console.log('Authentication failed');
    }
  }
}
