import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    PageOneComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FirstRoutingModule
  ]
})
export class FirstModule { }
