import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';



import { EdittasksComponent } from '../edittasks/edittasks.component';
import { MyApiService } from '../my-api.service';


@Component({
  selector: 'app-showtasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showtasks.component.html',
  styleUrl: './showtasks.component.scss'
})
export class ShowtasksComponent {

  constructor(private matDialog: MatDialog, private myApiService: MyApiService) {}

  openEditor(task: any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { task: task };
  
    this.matDialog.open(EdittasksComponent, dialogConfig);
  }
  

  deleteTask(){
    console.log(this.tasks);
  }

  tasks: any;

  ngOnInit(){
    this.fetchData()
  }

  fetchData(){
    this.myApiService.fetchTasks().subscribe((result) =>
      this.tasks = result
    )
  }
}
