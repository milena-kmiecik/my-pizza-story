import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CardsComponent } from './cards/cards.component';
import { PizzasListComponent } from './pizzas-list/pizzas-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RateComponent } from './rate/rate.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    PizzasListComponent,
    NavbarComponent,
    RateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
