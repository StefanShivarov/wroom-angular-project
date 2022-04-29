import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OffersModule } from '../offers/offers.module';



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    OffersModule,
  ],
  exports:[
    LandingPageComponent
  ]
})
export class PagesModule { }
