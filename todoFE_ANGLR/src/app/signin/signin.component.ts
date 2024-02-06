import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

// Custom Validator imports
import { checkEmailInput } from '../validators/emailValidator';
import { checkPasswordInput } from '../validators/passwordValidator';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  submitButtonClicked(){
    console.log(this.signinForm.value);
    // this function will check given input and sanitize it, 
    // before sending it to the backend API via httpclient. 
    // API connection handled here

  }
}
