import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjctListingComponent } from './projct-listing/projct-listing.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  declarations: [ProjctListingComponent, CreateProjectComponent, ProjectComponent],
  exports  : [ProjctListingComponent, CreateProjectComponent, ProjectComponent] // why ?
})
export class ProjectModule { }
