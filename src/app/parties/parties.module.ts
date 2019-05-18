import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartiesRoutingModule } from './parties-routing.module';
import { PartiesListComponent } from './parties-list/parties-list.component';
import { PartiesAddComponent } from './parties-add/parties-add.component';
import { ProposalNewComponent } from './proposal-new/proposal-new.component';
import { ProposalsListComponent } from './proposals-list/proposals-list.component';

@NgModule({
  declarations: [PartiesListComponent, PartiesAddComponent, ProposalNewComponent, ProposalsListComponent],
  imports: [
    CommonModule,
    PartiesRoutingModule
  ]
})
export class PartiesModule { }
