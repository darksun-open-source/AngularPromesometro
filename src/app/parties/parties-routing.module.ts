import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartiesListComponent } from './parties-list/parties-list.component';

const routes: Routes = [
  {
    path:'',
    component:PartiesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartiesRoutingModule { }
