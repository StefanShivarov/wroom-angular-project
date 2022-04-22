import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { OffersGridComponent } from './offers-grid/offers-grid.component';
import { OfferCardComponent } from './offer-card/offer-card.component';



@NgModule({
  declarations: [
    OffersGridComponent,
    OfferCardComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ],
  exports:[
    OffersGridComponent
  ]
})
export class OffersModule { }
