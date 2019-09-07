import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LMapRoutingModule } from './l-map-routing.module';
import { LLayerComponent } from './components/l-layer/l-layer.component';


@NgModule({
  declarations: [LLayerComponent],
  imports: [
    CommonModule,
    LMapRoutingModule
  ]
})
export class LMapModule { }
