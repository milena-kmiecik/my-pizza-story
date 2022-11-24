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
  readyPizzas: ReadyPizzaView[] = this.pizzaService.getAllPizzas();
  addingMode = true;

  addPizza() {
    this.pizzaService.addPizza(this.readyPizza);
    console.log(this.pizzaService.getAllPizzas());
  }

  addIngredient(ingredient: Ingredient) {
    this.readyPizza.ingredients.push(ingredient);
    console.log(this.readyPizza.ingredients)
  }

  deleteIngredient(ingredient: Ingredient) {
    const indexToDelete: number = this.readyPizza.ingredients.indexOf(ingredient)
    if (indexToDelete > -1) {
      this.readyPizza.ingredients.splice(indexToDelete, 1)
    }
    console.log(this.readyPizza.ingredients)
  }


}
