import {Component} from '@angular/core';
import {ReadyPizzaView} from "./models/readypizza.model";
import {IngredientsService} from "./services/ingredients.service";
import {PizzaService} from "./services/pizza.service";
import {Ingredient} from "./models/ingredient.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IngredientsService, PizzaService]
})
export class AppComponent {

  constructor(private ingredientService: IngredientsService,
              private pizzaService: PizzaService) {
  }

  title = 'my-pizza-story';
  readyPizza: ReadyPizzaView = {
    title: '',
    ingredients: [],
    votes: 0,
  }
  ingredients: Ingredient[] = this.ingredientService.getAllIngredients();


  addPizza() {
    this.pizzaService.addPizza(this.readyPizza)
  }
  addIngredient(ingredient:Ingredient) {
     this.readyPizza.ingredients.push(ingredient);
    console.log(this.readyPizza.ingredients)
  }

}
