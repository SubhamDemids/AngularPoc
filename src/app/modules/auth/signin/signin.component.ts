import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataShareService } from '../../service/data-share.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{


  signInForm!: FormGroup
  loggedIn: boolean = false;
  isSubmitClicked=false
  constructor(private formBuilder: FormBuilder,private router: Router,private dataSharingService:  DataShareService) {
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
    this.loggedIn = true;
    this.isSubmitClicked = true;
    if(this.signInForm.invalid){
      return;
    }
    const signInEmail = this.signInForm.get('email')?.value;
    const signInPassword = this.signInForm.get('password')?.value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password')

    if (signInEmail === storedEmail && signInPassword === storedPassword) {
      //this.dataSharingService.sendData(true);
      this.dataSharingService.login();
      this.router.navigate(['/contactlist']);
     console.log("Authentication sucesss")
    } else {
      this.signInForm.controls['password'].setErrors({ incorrectCredentials: true });
      
      console.log('Authentication failed');
    }
  }
}
