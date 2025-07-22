import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Homepage } from './homepage/homepage';
import { OuthGuard } from './outh-guard';
import { Manageusers } from './manageusers/manageusers';

const routes: Routes = [
  {path:'dashboard',component:Dashboard,canActivate:[OuthGuard]},
  {path:'manageusers',component:Manageusers,canActivate:[OuthGuard]},
  {path:'',component:Homepage} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
