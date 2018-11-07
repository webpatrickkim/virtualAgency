import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'portal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  isLogin:boolean=true;
  isRegister:boolean=false;
  isForgot:boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
    this.registerForm = this.formBuilder.group({
    'first_name': ['', Validators.required],
      'last_name': ['', Validators.required],
      'email': ['', [Validators.required]],
      'password': ['', Validators.required],
      'passwordConfirm': ['', Validators.required]
  });
}

   hideall(){
     this.isLogin=false;
     this.isRegister=false;
     this.isForgot=false;
   }
  login(){
    this.hideall();
    this.isLogin=true;
  }
  register(){
    this.hideall();
  this.isRegister=true;
  }
  forgot(){
    this.hideall();
  this.isForgot=true;
  }

}
