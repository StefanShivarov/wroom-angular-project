import { Component, Input, OnInit } from '@angular/core';
import { IOffer } from 'src/app/core/interfaces/offer';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent implements OnInit {

  @Input() offer!: IOffer;

  constructor() { }

  ngOnInit(): void {
  }

}
