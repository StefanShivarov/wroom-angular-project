import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { OffersGridComponent } from './offers-grid/offers-grid.component';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { RouterModule } from '@angular/router';
import { OffersPageComponent } from './offers-page/offers-page.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';



@NgModule({
  declarations: [
    HeaderCarouselComponent,
    OffersGridComponent,
    OfferCardComponent,
    OffersPageComponent,
    AddOfferComponent,
    OfferDetailsComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    RouterModule
  ],
  exports:[
    OffersGridComponent,
    OfferCardComponent,
    HeaderCarouselComponent
  ]
})
export class OffersModule { }
