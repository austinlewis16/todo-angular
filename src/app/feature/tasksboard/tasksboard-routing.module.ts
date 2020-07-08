import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksboardComponent } from './tasksboard.component';

const routes: Routes = [
	{ path: '', component: TasksboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksboardRoutingModule { }
