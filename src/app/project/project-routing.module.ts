import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjctListingComponent } from './projct-listing/projct-listing.component';
import { CreateProjectComponent} from './create-project/create-project.component';

const projectRoutes: Routes = [
  {
    path : '',
    component : ProjectComponent,
    children : [
      // projects/id or projects
      {
        path : '',
        children : [
          {
            path : '',
            component : ProjctListingComponent
          },
          {
            path : 'create',
            component : CreateProjectComponent
          }
        ]

      }

    ]
  }, {
    path : "a",
    loadChildren: ()=> import('./a/a.module').then(mod=>mod.AModule)
  }, {
    path:"b",
    loadChildren : ()=> import('./b/b.module').then(mod=>mod.BModule)
  }, {
    path : "c",
    loadChildren : ()=> import('./c/c.module').then(mod=>mod.CModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
