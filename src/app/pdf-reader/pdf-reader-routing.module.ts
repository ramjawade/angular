import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdfComponent } from './components/pdf/pdf.component';


const routes: Routes = [{
  path: "",
  component : PdfComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfReaderRoutingModule { }
