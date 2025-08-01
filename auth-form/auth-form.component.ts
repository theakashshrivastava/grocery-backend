import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
  imports: [FormsModule]
})
export class AuthFormComponent implements OnInit {

  displayText_1: string = 'Please login to place your order!'
  displayText_2: string = 'Sign up to get your groceries at the discounted price!'

  signInData = {
    userName: '',
    password: ''
  };

  signUpData = {
    userName: '',
    email: '',
    password: '',
    role: ''
  };

  constructor() {}

  ngOnInit(): void {}

  switchToSignUp(): void {
    const container = document.getElementById('container');
    container?.classList.add('right-panel-active');
  }

  switchToSignIn(): void {
    const container = document.getElementById('container');
    container?.classList.remove('right-panel-active');
  }

  onSignUp(): void {
    console.log('SignUp Data:', this.signUpData);
    // TODO: Make API call to register user
  }

  onSignIn(): void {
    console.log('SignIn Data:', this.signInData);
    // TODO: Make API call to authenticate user
  }
}
