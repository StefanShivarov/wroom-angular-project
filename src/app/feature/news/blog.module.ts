import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    HeaderCarouselComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ],
  exports:[
    HeaderCarouselComponent
  ]
})
export class BlogModule { }