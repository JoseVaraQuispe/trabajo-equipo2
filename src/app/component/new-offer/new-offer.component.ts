import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Offer } from 'src/app/models/offer.model';
import { HttpDataService } from 'src/app/services/http-data.service';

function minValueValidator(control: AbstractControl){
  const isValid = control.value >= 0
  return isValid? null: {'minValue': "error"};
}
function maxValueValidator(control: AbstractControl){
  const isValid = control.value <= 100
  return isValid? null: {'maxValue': 'error'};
}
@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.scss'],
})


export class NewOfferComponent {
  offerForm = new FormGroup({
    id: new FormControl(0),
    title: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    description: new FormControl(''),
    points: new FormControl(null, [Validators.required, Validators.maxLength(60), minValueValidator, maxValueValidator]),
    businessId: new FormControl(''),
  })


  constructor(
    private router: Router,
    private HttpDataService: HttpDataService
  ) {
  }

  saveOffer(){
    if(this.offerForm.valid){
      this.offerForm.value.id = 0;
      this.HttpDataService.createItem(this.offerForm.value).subscribe((response:any)=>{
        this.router.navigate(['/business/offers']);
      })
    }
  }
  cancelSubmit(){
    this.router.navigate(['/business/offers']);
  }
}
