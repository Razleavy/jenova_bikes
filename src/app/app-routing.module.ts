import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paths } from './models/enums/paths';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: Paths.PAGE_NOT_FOUND, loadChildren: () => import('./pages/notfound/notfound.module').then(m => m.NotfoundModule) },
  { path: '**', redirectTo: Paths.PAGE_NOT_FOUND }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
