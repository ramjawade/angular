import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from './material-module/material-module.module';

import { TempComponent } from './temp/temp.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'temp', component: TempComponent },
  { path:'dashboard',component: DashboardComponent}
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
