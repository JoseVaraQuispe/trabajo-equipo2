import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Offer } from 'src/app/models/offer.model';
import { HttpDataService } from 'src/app/services/http-data.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.scss'],
})
export class NewOfferComponent {
  @ViewChild('movieForm', { static: false })
  offerForm!: FormGroup;

  offerData!: Offer;

  constructor(
    private router: Router,
    private HttpDataService: HttpDataService
  ) {
    this.offerData = {} as any;
  }
}
