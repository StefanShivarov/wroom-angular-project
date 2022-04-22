import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { OffersGridComponent } from './offers-grid/offers-grid.component';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { RouterModule } from '@angular/router';
import { OffersPageComponent } from './offers-page/offers-page.component';



@NgModule({
  declarations: [
    OffersGridComponent,
    OfferCardComponent,
    OffersPageComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    RouterModule
  ],
  exports:[
    OffersGridComponent
  ]
})
export class OffersModule { }
