import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../core/core.module";

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { TimelineCardComponent } from './profile/common/components/timeline-card/timeline-card.component';
import { TringleComponent } from './profile/common/components/tringle/tringle.component';
import { TimelineLayoutComponent } from './profile/common/components/timeline-layout/timeline-layout.component';
import { TimelineComponent } from './profile/common/components/timeline/timeline.component';

@NgModule({
  declarations: [ProfileComponent, TimelineCardComponent, TringleComponent, TimelineLayoutComponent, TimelineComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModuleModule,
    FlexModule,
    FlexLayoutModule,
    CoreModule
  ]
})
export class ProfileModule { }
