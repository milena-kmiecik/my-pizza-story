import {Inject, Injectable} from "@angular/core";
import {INGREDIENTS} from "../models/data-base";
import {Pizza, ReadyPizzaView} from "../models/readypizza.model";
import {IngredientsService} from "./ingredients.service";



@Injectable({
  providedIn:'root',
})
export class PizzaService {

  pizzas: Pizza[] = [];
  private ingredientsService: IngredientsService;

  constructor(ingredientsService: IngredientsService) {
    this.ingredientsService = ingredientsService;
  }

  getAllPizzas(){
    return this.pizzas.map(pizza => {
      return {
        title: pizza.title,
        ingredients: pizza.ingredientIds.map(ingredientId => {
          this.ingredientsService.getIngredientById(ingredientId)
        }),
        votes: pizza.votes
      }
      });
  }

  addPizza(pizza: ReadyPizzaView) {
    this.pizzas.push(
      {
        title: pizza.title,
        ingredientIds: pizza.ingredients.map(ingredient => ingredient.id),
        votes: pizza.votes
      }
    );
  }
}
