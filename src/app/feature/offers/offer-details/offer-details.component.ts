import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOffer } from 'src/app/core/interfaces/offer';
import { OfferService } from 'src/app/core/service/offer.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {

  offer!: IOffer;

  constructor(private activatedRoute: ActivatedRoute, private offerService: OfferService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.offerService.getOfferById$(id).subscribe(offer => this.offer = offer);
    })
  }

}
