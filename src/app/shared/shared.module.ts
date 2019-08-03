import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from "./../material-module/material-module.module"
import { FlexModule} from '@angular/flex-layout';
import { InputComponent } from './components/input/input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    MaterialModuleModule,
    FlexModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [InputComponent]
})
export class SharedModule { }
