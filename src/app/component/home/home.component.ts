import { Component,OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import { HttpDataService } from 'src/app/services/http-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  offers: Offer[] = [];
  offerCount=0;

  constructor(
    private httpDataService: HttpDataService  ) {}

  ngOnInit(){
    this.httpDataService.getList().subscribe((offers: Offer[]) => {
      this.offers = offers;
      this.offerCount = this.offers.length;
    });
  }
}
