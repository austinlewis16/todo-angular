import { NewListComponent } from './new-list/new-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksboardComponent } from './tasksboard.component';
import { empty } from 'rxjs';

const routes: Routes = [
  { path: '', component: TasksboardComponent,
  children: [
    {path: '', redirectTo: 'new-list', pathMatch: 'full'},
    {path: 'edit-task', component: EditTaskComponent},
    {path: 'new-list', component: NewListComponent},
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksboardRoutingModule { }
