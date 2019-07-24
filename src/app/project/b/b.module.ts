import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BRoutingModule ,BRoutingComponents } from './b-routing.module';


@NgModule({
  declarations: [BRoutingComponents],
  imports: [
    CommonModule,
    BRoutingModule
  ]
})
export class BModule { }
