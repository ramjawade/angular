import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { PdfViewerModule } from "ng2-pdf-viewer";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AgGridModule} from 'ag-grid-angular';

import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FourZeroFourComponent 
  ],
  imports: [
    AgGridModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    FormsModule,
    FlexModule,
    ReactiveFormsModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule.forRoot(),
    HighchartsChartModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
