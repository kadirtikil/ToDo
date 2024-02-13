import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'; 

import { MyApiService } from '../my-api.service';

import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-tasks',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule,
            MatInputModule, ReactiveFormsModule],
  templateUrl: './create-tasks.component.html',
  styleUrl: './create-tasks.component.scss'
})
export class CreateTasksComponent {

  selectedStatus: string = 'done'; 

  newtaskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    deadline: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  })

  constructor(private myapiService: MyApiService) {}

  submitNewTask(){
    this.myapiService.createNewTask(this.newtaskForm.value)
      .subscribe(response => {
        console.log('Task created successfully:', response);
      }, error => {
        console.error('Error creating task:', error);
      });
  }
  

}
