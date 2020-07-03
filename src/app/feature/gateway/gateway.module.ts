import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatewayRoutingModule } from './gateway-routing.module';
import { GatewayComponent } from './gateway.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [GatewayComponent, SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    GatewayRoutingModule
  ]
})
export class GatewayModule { }
