import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { Offer } from 'src/app/models/offer.model';
import { HttpDataService } from 'src/app/services/http-data.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.scss']
})
 

export class EditOfferComponent implements OnInit{
    offer: Offer;
    editOfferForm: FormGroup = new FormGroup({
      id: new FormControl(0),
      title: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      description: new FormControl(''),
      points: new FormControl(null, [Validators.required, Validators.maxLength(60)]),
      businessId: new FormControl(''),
    });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private HttpDataService: HttpDataService,
  ) {
    this.offer = { id: null, title: '', description: '', points: null, businessId: '' };

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.HttpDataService.getItem(id).subscribe((offer: Offer) => {
        this.offer = offer;
        this.editOfferForm = this.formBuilder.group({
          id: [this.offer.id],
          title: [this.offer.title, [Validators.required, Validators.maxLength(60)]],
          description: [this.offer.description],
          points: [this.offer.points, [Validators.required, Validators.maxLength(60)]],
          businessId: [this.offer.businessId],
        });
      });
    });
  }

  updateOffer() {
    if (this.editOfferForm.valid) {
      const updatedOffer: Offer = {
        id: this.offer.id,
        title: this.editOfferForm.value.title,
        description: this.editOfferForm.value.description,
        points: this.editOfferForm.value.points,
        businessId: this.offer.businessId
      };
      this.HttpDataService.updateItem(this.offer.id, updatedOffer).subscribe(() => {
        this.router.navigate(['/admin/offers']);
      });
    }
  }
  cancelSubmit(){
    this.router.navigate(['/business/offers']);
  }
}
