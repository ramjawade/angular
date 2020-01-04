import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from './material-module/material-module.module';
import { FlexModule} from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';

import { TempComponent } from './temp/temp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent} from './map/map.component';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';

const routes: Routes = [{
  path: 'temp',
  component: TempComponent
}, {
  path: 'dashboard',
  component: DashboardComponent
}, {
  path : 'auth',
  loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule)
}, {
  path: 'map',
  component : MapComponent
  // loadChildren : () => import ('./map/map.component').then(m => m.GMapModule)
}, {
  path : 'projects',
  loadChildren : () => import('./project/project.module').then(m => m.ProjectModule)  // # - lazy loding of module
}, {
  path : 'pdf',
  loadChildren : () => import('./pdf-reader/pdf-reader.module').then(m => m.PdfReaderModule)
}, {
  path : 'profile',
  loadChildren : () => import('./profile/profile.module').then(m => m.ProfileModule)
}, {
  path : 'user',
  loadChildren : () => import('./user-management/user-management.module').then(m => m.UserManagementModule)
}, {
  path : '',
  redirectTo : 'profile',
  pathMatch : 'full'
}, {
  path : '**',
  component : FourZeroFourComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    FlexModule,
    HighchartsChartModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [TempComponent, DashboardComponent],
  exports : [RouterModule]
})

export class AppRoutingModule {

}
