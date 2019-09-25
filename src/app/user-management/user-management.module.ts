import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListingUserComponent } from './listing-user/listing-user.component';
import { MaterialModuleModule } from "./../material-module/material-module.module"
import { FlexModule} from '@angular/flex-layout';
import { AgGridModule} from 'ag-grid-angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserManagementRoutingModule } from './user-management-routing.module';



@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    FlexModule,
    FormsModule, ReactiveFormsModule,
    SharedModule,
    AgGridModule.withComponents([]),
    UserManagementRoutingModule
  ],
  declarations: [CreateUserComponent, ListingUserComponent]
})
export class UserManagementModule { }
