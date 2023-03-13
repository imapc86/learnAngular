import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path: 'page-one',
    component: PageOneComponent
  },
  {
    path: 'page-two',
    component: PageTwoComponent
  },
  {
    path: '**',
    redirectTo: 'page-one'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
