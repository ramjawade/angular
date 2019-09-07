import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { GMapRoutingModule } from './g-map-routing.module';
import { GLayerComponent } from './components/g-layer/g-layer.component';



@NgModule({
  declarations: [GLayerComponent],
  imports: [
    CommonModule,
    GMapRoutingModule,
    AgmCoreModule.forRoot()
  ]
})
export class GMapModule { }
