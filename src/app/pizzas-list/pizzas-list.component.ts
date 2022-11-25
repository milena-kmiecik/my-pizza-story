import { Component, OnInit } from '@angular/core';
import {IngredientsService} from "../services/ingredients.service";
import {PizzaService} from "../services/pizza.service";

@Component({
  selector: 'app-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.css']
})
export class PizzasListComponent implements OnInit {

  constructor(private ingredientService: IngredientsService,
  private pizzaService: PizzaService) { }

  ngOnInit(): void {
  }
  getPizzasCount() {
    return this.pizzaService.getAllPizzas().length;
  }

  getAllPizzas() {
    return this.pizzaService.getAllPizzas();
  }

}
