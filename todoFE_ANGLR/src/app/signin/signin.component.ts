import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

// Custom Validator imports
import { checkEmailInput } from '../validators/emailValidator';
import { checkPasswordInput } from '../validators/passwordValidator';

// importiere den service, zur kommunikation mit der api
import { MyApiService } from '../my-api.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
@Injectable({providedIn: 'root'})
export class SigninComponent {
  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  private api = '127.0.0.1/api/login';

  constructor(private MyApiService: MyApiService){}
  
  submitButtonClicked(){
    const creds = this.signinForm.value;


    this.MyApiService.authenticateCredentials(creds).subscribe(
      (response) => console.log(response)
    );

    console.log('creds are working');

  }
}
