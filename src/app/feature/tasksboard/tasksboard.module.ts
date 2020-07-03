import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksboardRoutingModule } from './tasksboard-routing.module';
import { TasksboardComponent } from './tasksboard.component';
import { NewListComponent } from './new-list/new-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';


@NgModule({
  declarations: [TasksboardComponent, NewListComponent, EditTaskComponent],
  imports: [
    CommonModule,
    TasksboardRoutingModule
  ]
})
export class TasksboardModule { }
