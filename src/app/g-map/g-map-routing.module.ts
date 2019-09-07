import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GLayerComponent } from './components/g-layer/g-layer.component';


const routes: Routes = [{
  path: '',
  component : GLayerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GMapRoutingModule { }
