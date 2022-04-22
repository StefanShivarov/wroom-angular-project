import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OffersModule } from '../offers/offers.module';
import { BlogModule } from '../news/blog.module';



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    OffersModule,
    BlogModule
  ],
  exports:[
    LandingPageComponent
  ]
})
export class PagesModule { }
