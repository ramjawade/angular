import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModuleModule } from './material-module/material-module.module';
import { UserManagementModule } from './user-management/user-management.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexModule} from '@angular/flex-layout';
import { HttpClientModule }    from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AgGridModule} from 'ag-grid-angular';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
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
    AppRoutingModule,
    HttpClientModule,
    UserManagementModule,
    LeafletModule.forRoot()
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
