import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListingUserComponent } from './listing-user/listing-user.component';
import { CreateUserComponent } from './create-user/create-user.component';

const userRoutes : Routes = [{ 
    path : 'list', 
    component : ListingUserComponent
  },{ 
    path : 'create', 
    component : CreateUserComponent
  }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UserManagementRoutingModule { }
