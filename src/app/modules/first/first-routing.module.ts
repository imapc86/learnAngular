import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PageOneComponent } from './pages/page-one/page-one.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path: '**', 
    redirectTo: 'page-one'
  },
  {
    path: 'page-one',
    component: PageOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
