import { Component, OnInit } from '@angular/core';
import { IOffer } from 'src/app/core/interfaces/offer';
import { OfferService } from 'src/app/core/service/offer.service';

@Component({
  selector: 'app-offers-grid',
  templateUrl: './offers-grid.component.html',
  styleUrls: ['./offers-grid.component.css']
})
export class OffersGridComponent implements OnInit {

  latestOffers!: IOffer[];
  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.offerService.getLatestOffers$().subscribe(offers => this.latestOffers = offers);
  }

}
