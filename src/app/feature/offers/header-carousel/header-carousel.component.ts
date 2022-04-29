import { Component, OnInit } from '@angular/core';
import { IOffer } from 'src/app/core/interfaces/offer';
import { OfferService } from 'src/app/core/service/offer.service';

@Component({
  selector: 'app-header-carousel',
  templateUrl: './header-carousel.component.html',
  styleUrls: ['./header-carousel.component.css']
})
export class HeaderCarouselComponent implements OnInit {

  offers!: IOffer[];

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.offerService.getLatestOffers$().subscribe(offers => this.offers = offers.slice(0, 3));
  }
}
