import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOfferComponent } from './feature/offers/add-offer/add-offer.component';
import { OfferDetailsComponent } from './feature/offers/offer-details/offer-details.component';
import { OffersGridComponent } from './feature/offers/offers-grid/offers-grid.component';
import { OffersPageComponent } from './feature/offers/offers-page/offers-page.component';
import { LandingPageComponent } from './feature/pages/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingPageComponent
  },
  {
    path:'offers',
    component: OffersPageComponent
  },
  {
    path: 'offers/add',
    pathMatch: 'full',
    component: AddOfferComponent
  },
  {
    path: 'offers/:id',
    component: OfferDetailsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
