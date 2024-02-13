import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyApiService } from '../my-api.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'; 
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';  // Add this import

@Component({
  selector: 'app-edittasks',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './edittasks.component.html',
  styleUrls: ['./edittasks.component.scss'],  // Fix the typo here
})
export class EdittasksComponent {
  selectedStatus: string = 'done'; 

  editTaskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    deadline: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  })

  constructor(private myapiService: MyApiService, @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data && data.task) {
      const task = data.task;
      this.editTaskForm.patchValue({
        title: task.title,
        body: task.body,
        deadline: task.deadline,
        category: task.category,
        status: task.status,
      });
    }
  }
  

  submitNewTask(){
    this.myapiService.createNewTask(this.editTaskForm.value)
      .subscribe(response => {
        console.log('Task created successfully:', response);
      }, error => {
        console.error('Error creating task:', error);
      });
  }
}
