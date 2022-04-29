import { Component, OnInit } from '@angular/core';
import { IOffer } from 'src/app/core/interfaces/offer';
import { OfferService } from 'src/app/core/service/offer.service';

@Component({
  selector: 'app-offers-page',
  templateUrl: './offers-page.component.html',
  styleUrls: ['./offers-page.component.css']
})
export class OffersPageComponent implements OnInit {

  offers!: IOffer[];

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.offerService.getAllOffers$().subscribe(offers => this.offers = offers);
  }

}
