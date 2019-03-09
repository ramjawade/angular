import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListingUserComponent } from './listing-user/listing-user.component';
import { MaterialModuleModule } from "./../material-module/material-module.module"
import { FlexModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    FlexModule
  ],
  declarations: [CreateUserComponent, ListingUserComponent]
})
export class UserManagementModule { }
