import {Inject, Injectable} from "@angular/core";
import {INGREDIENTS} from "../models/data-base";
import {Pizza, ReadyPizzaView} from "../models/readypizza.model";
import {IngredientsService} from "./ingredients.service";
import {Ingredient} from "../models/ingredient.model";



@Injectable({
  providedIn:'root',
})
export class PizzaService {

  pizzas: Pizza[] = [];
  private ingredientsService: IngredientsService;

  constructor(ingredientsService: IngredientsService) {
    this.ingredientsService = ingredientsService;
  }

  getAllPizzas(): ReadyPizzaView[]{
    return this.pizzas.map(pizza => {
      let ingredients: Ingredient[] = pizza.ingredientIds
        .map(ingredientId => this.ingredientsService.getIngredientById(ingredientId))
      return {
        title: pizza.title,
        ingredients: ingredients,
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
