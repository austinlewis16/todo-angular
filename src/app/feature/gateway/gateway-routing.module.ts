import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatewayComponent } from './gateway.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{ path: '', component: GatewayComponent,
		children: [
			{path: 'login', component: LoginComponent},
			{path: 'signup', component: SignupComponent},
		], 
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatewayRoutingModule { }
