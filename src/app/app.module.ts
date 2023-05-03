import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListOffersComponent } from './component/list-offers/list-offers.component';
import { MaterialModule } from 'src/shared/material.module';
import { NewOfferComponent } from './component/new-offer/new-offer.component';
import { EditOfferComponent } from './component/edit-offer/edit-offer.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOffersComponent,
    NewOfferComponent,
    EditOfferComponent,
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
