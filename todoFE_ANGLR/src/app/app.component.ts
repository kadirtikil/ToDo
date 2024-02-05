import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { CreateTasksComponent } from './create-tasks/create-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowtasksComponent } from './showtasks/showtasks.component';
import { SigninComponent } from './signin/signin.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent, NotFoundComponent, SigninComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todoFE_ANGLR';
}
