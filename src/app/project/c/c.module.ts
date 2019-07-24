import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRoutingModule , CRoutingComponents } from './c-routing.module';

@NgModule({
  declarations: [CRoutingComponents],
  imports: [
    CommonModule,
    CRoutingModule
  ]
})
export class CModule { }
