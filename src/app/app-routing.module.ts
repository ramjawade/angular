import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from './material-module/material-module.module';

import { TempComponent } from './temp/temp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent} from './map/map.component';
import { ListingUserComponent } from './user-management/listing-user/listing-user.component';
import { CreateUserComponent } from './user-management/create-user/create-user.component';

const routes: Routes = [
  { path: 'temp', component: TempComponent },
  { path:'dashboard',component: DashboardComponent},
  { path:'map',component:MapComponent},
  { path : "userMgt", component : ListingUserComponent},
  { path : "createUser", component : CreateUserComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [TempComponent,DashboardComponent],
  exports : [RouterModule]
})

export class AppRoutingModule { 
  
}
