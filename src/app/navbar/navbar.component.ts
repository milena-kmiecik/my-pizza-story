import { Component, OnInit } from '@angular/core';
import {PizzaService} from "../services/pizza.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {

  }
  getPizzasCount() {
    return this.pizzaService.getAllPizzas().length;
  }
}
