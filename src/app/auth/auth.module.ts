import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexModule
  ],
  declarations: [LoginComponent],
  exports : [LoginComponent]
})
export class AuthModule { }
