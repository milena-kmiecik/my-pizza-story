import {Ingredient} from "./ingredient.model";


export interface ReadyPizzaView {
  title: string;
  ingredients: Ingredient[];
  votes: number;
}
export interface Pizza {
  title: string;
  ingredientIds: number[];
  votes: number;
}
