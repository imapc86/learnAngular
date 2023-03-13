import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FirstRoutingModule } from './first-routing.module';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { MainComponent } from './pages/main/main.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';


@NgModule({
  declarations: [
    PageOneComponent,
    MainComponent,
    PageTwoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FirstRoutingModule
  ]
})
export class FirstModule { }
