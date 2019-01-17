import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from './material-module/material-module.module';

import { TempComponent } from './temp/temp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent} from './map/map.component';

const routes: Routes = [
  { path: 'temp', component: TempComponent },
  { path:'dashboard',component: DashboardComponent},
  {path:'map',component:MapComponent}
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
