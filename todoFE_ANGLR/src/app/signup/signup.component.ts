import { Component } from '@angular/core';

import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Custom Validator imports
import { checkEmailInput } from '../validators/emailValidator';
import { checkPasswordInput } from '../validators/passwordValidator';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  submitButtonClicked(){
    console.log('signup submit clicked');
    // API connection handled here
  }
}
