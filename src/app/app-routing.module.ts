import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{ path: 'gateway', loadChildren: () => import('./feature/gateway/gateway.module').then(m => m.GatewayModule) },
	{ path: 'tasksboard', loadChildren: () => import('./feature/tasksboard/tasksboard.module').then(m => m.TasksboardModule) }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
