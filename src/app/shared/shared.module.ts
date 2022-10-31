import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
