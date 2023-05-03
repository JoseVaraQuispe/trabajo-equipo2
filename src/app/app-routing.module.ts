import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOffersComponent } from './component/list-offers/list-offers.component';
import { NewOfferComponent } from './component/new-offer/new-offer.component';
import { EditOfferComponent } from './component/edit-offer/edit-offer.component';

const routes: Routes = [
  { path: 'business/offers', component: ListOffersComponent },
  { path: 'admin/offers/new', component: NewOfferComponent },
  { path: 'admin/offers/edit/:id', component: EditOfferComponent },
  { path: '', pathMatch: 'full', redirectTo: 'business/offers' },
  { path: '**', pathMatch: 'full', redirectTo: 'business/offers' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
