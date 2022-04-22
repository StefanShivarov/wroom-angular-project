import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
