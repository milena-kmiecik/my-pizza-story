import { Component } from '@angular/core';
import {Ingredient} from "./models/ingredient.model";
import {INGREDIENTS} from "./models/data-base";
import {ReadyPizza} from "./models/readypizza.model";

class ingredients {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-pizza-story';
  readypizza: ReadyPizza = {
    title: '',
    ingredients: [],
    votes: 0,
  }
  ingredients: ingredients[] = INGREDIENTS;
}
