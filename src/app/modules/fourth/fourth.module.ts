import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourthRoutingModule } from './fourth-routing.module';
import { PageOneComponent } from './pages/page-one/page-one.component';


@NgModule({
  declarations: [
    PageOneComponent
  ],
  imports: [
    CommonModule,
    FourthRoutingModule
  ]
})
export class FourthModule { }
