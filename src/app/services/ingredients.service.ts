import {Injectable} from "@angular/core";
import {INGREDIENTS} from "../models/data-base";



@Injectable({
  providedIn:'root',
})
export class IngredientsService {
  getAllIngredients(){
    return INGREDIENTS
  }
  getIngredientById(id: number){
    for (const ingredient of INGREDIENTS) {
      if (ingredient.id === id) {
        return ingredient;
      }
    }
    return null;
  }
}
