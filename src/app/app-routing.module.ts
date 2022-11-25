import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PizzasListComponent} from "./pizzas-list/pizzas-list.component";
import {CardsComponent} from "./cards/cards.component";



const routes: Routes = [
  {
    path: 'mypizzas', component: PizzasListComponent
  },
  {
    path: '#', component: CardsComponent
  },
  {
    path: '', redirectTo:'/ingredients', pathMatch:'full'
  },
  {
    path: 'ingredients', component: CardsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
