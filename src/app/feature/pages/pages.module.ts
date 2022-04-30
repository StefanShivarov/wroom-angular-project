import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OffersModule } from '../offers/offers.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    OffersModule,
    RouterModule
  ],
  exports:[
    LandingPageComponent
  ]
})
export class PagesModule { }
