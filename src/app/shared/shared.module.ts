import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    PaginatorComponent,
    ColorPickerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    PaginatorComponent,
    ColorPickerComponent
  ]
})
export class SharedModule { }
