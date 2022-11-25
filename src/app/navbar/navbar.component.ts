import { Component, OnInit } from '@angular/core';
import {PizzaService} from "../services/pizza.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private pizzaService: PizzaService,
              private router: Router) { }

  ngOnInit(): void {

  }
  getPizzasCount() {
    return this.pizzaService.getAllPizzas().length;
  }
  goToMyPizzas(){
    this.router.navigate(['/mypizzas'])
  }

  goToIngredients() {
    this.router.navigate(['/ingredients'])
  }
}
