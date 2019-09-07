import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import { MaterialModuleModule } from '../material-module/material-module.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModuleModule,
    FlexModule,
    FlexLayoutModule
  ]
})
export class ProfileModule { }
