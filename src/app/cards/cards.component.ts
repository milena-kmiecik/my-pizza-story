import {Component, ElementRef, OnInit} from '@angular/core';
import {Ingredient} from "../models/ingredient.model";
import {PizzaService} from "../services/pizza.service";
import {IngredientsService} from "../services/ingredients.service";
import {ReadyPizzaView} from "../models/readypizza.model";
import {FormGroup} from "@angular/forms";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  ingredients: Ingredient[] = this.ingredientService.getAllIngredients();
  title = 'my-pizza-story';
  readyPizza: ReadyPizzaView = {
    title: '',
    ingredients: [],
    votes: 0,
  }
  maxIgredientsCount = 8;
  ingredientsForm: any;

  constructor(private ingredientService: IngredientsService,
              private pizzaService: PizzaService) {
  }

  ngOnInit(): void {
  }

  addIngredient(ingredient: Ingredient) {
    this.readyPizza.ingredients.push(ingredient);
    console.log('add ingredient' + this.readyPizza.ingredients)
  }

  deleteIngredient(ingredient: Ingredient) {
    const indexToDelete: number = this.readyPizza.ingredients.indexOf(ingredient)
    if (indexToDelete > -1) {
      this.readyPizza.ingredients.splice(indexToDelete, 1)
    }
    console.log('delete.ingredient' + this.readyPizza.ingredients)
  }

  addPizza() {
    this.pizzaService.addPizza(this.readyPizza);
  }

  getIngredientsCount(): number {
    return this.readyPizza.ingredients.length;
  }

  checkNameAvailability(title: string): boolean {
    return this.getAllPizzas()
      .filter(pizza => pizza.title === title).length == 0;
  }

  getAllPizzas() {
    return this.pizzaService.getAllPizzas();
  }

  ingredientsPercent() {
    return Math.round((this.getIngredientsCount() / this.maxIgredientsCount)*100)
  }
  onSubmit(form: NgForm){
    if (form.value.readyPizzaTitle != null) {
      this.readyPizza.title = form.value.readyPizzaTitle.toString()
    }
    this.addPizza()
  }
}
