import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfReaderRoutingModule } from './pdf-reader-routing.module';
import { PdfComponent } from './components/pdf/pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PdfComponent],
  imports: [
    CommonModule,
    PdfReaderRoutingModule,
    PdfViewerModule,
    MaterialModuleModule,
    FlexModule,
    FormsModule
  ]
})
export class PdfReaderModule { }
