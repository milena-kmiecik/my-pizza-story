import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from "../models/readypizza.model";

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input()
pizzas: Pizza[] = [];
}
