import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { C3Component } from './components/c3/c3.component';


const routes: Routes = [{
  path :'',
  component : C1Component
},{
  path : "c1",
  component : C2Component
},{
  path : "c2",
  component : C3Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRoutingModule { }
export const CRoutingComponents = [C1Component,C2Component,C3Component]
