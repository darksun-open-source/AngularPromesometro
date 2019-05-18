import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesNewComponent } from './candidates-new/candidates-new.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';

@NgModule({
  declarations: [CandidatesNewComponent, CandidatesListComponent],
  imports: [
    CommonModule,
    CandidatesRoutingModule
  ]
})
export class CandidatesModule { }
