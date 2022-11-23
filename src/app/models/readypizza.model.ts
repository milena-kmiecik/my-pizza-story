import {Ingredient} from "./ingredient.model";


export interface ReadyPizza {
  title: string;
  ingredients: Ingredient[];
  votes: number;
}
