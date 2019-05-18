import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { CandidatesNewComponent } from './candidates-new/candidates-new.component';

const routes: Routes = [
  {
    path: '',
    component: CandidatesListComponent
  },
  {
    path: 'new',
    component: CandidatesNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }
