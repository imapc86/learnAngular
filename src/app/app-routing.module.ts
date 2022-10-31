import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/errors/not-found/not-found.component';
import { FourthModule } from './modules/fourth/fourth.module';
import { ThirdModule } from './modules/third/third.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'first-module'
  },
  {
    path: '**',
    redirectTo: 'errors/not-found'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'first-module',
    loadChildren: () => import('./modules/first/first.module').then(m => m.FirstModule)
  },
  {
    path: 'second-module',
    loadChildren: () => import('./modules/second/second.module').then(m => m.SecondModule)
  },
  {
    path: 'third-module',
    loadChildren: () => import('./modules/third/third.module').then(m => ThirdModule)
  },
  {
    path: 'fourth-module',
    loadChildren: () => import('./modules/fourth/fourth.module').then(m => FourthModule)
  },
  {
    path: 'maps',
    loadChildren: () =>import('./modules/maps/maps.module').then(m => m.MapsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
