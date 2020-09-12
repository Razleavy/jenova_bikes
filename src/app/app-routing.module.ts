import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paths } from './models/enums/paths';
import { PathResolveService } from './pages/notfound/resolvers/path.resolver';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: Paths.MAP, loadChildren: () => import('./pages/map/map.module').then(m => m.MapModule) },
  { path: '**', loadChildren: () => import('./pages/notfound/notfound.module').then(m => m.NotfoundModule), resolve: { path: PathResolveService } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
