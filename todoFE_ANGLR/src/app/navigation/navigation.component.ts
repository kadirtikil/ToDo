import { DialogConfig } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { CreateTasksComponent } from '../create-tasks/create-tasks.component';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';

import { MyApiService } from '../my-api.service';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  createTask(){
    console.log('createTask');
  }

  constructor(private dialog: MatDialog){}

  openCreateTaskDialog(){
    const dialogconfig = new MatDialogConfig();

    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;

    this.dialog.open(CreateTasksComponent)
  }

  openSignInDialog(){
    const dialogconfig = new MatDialogConfig();

    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;

    this.dialog.open(SigninComponent)
  }

  openSignUpDialog(){
    const dialogconfig = new MatDialogConfig();

    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;

    this.dialog.open(SignupComponent)
  }

  logout(){
    console.log("logout")
  }
}
