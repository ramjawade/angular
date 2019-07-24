import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARoutingModule , AroutedComponents } from './a-routing.module';

@NgModule({
  declarations: [AroutedComponents],
  imports: [
    CommonModule,
    ARoutingModule
  ]
})
export class AModule { }
