import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './home/main/main.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'main',
    loadChildren:'./home/home.module#HomeModule'
  },
  {
    path: 'candidates',
    loadChildren: './candidates/candidates.module#CandidatesModule'
  },
  {
    path:'parties',
    loadChildren:'./parties/parties.module#PartiesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
