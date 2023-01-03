import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Products } from '../shared/models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Products[] = [];
  constructor(private foodService:FoodService) { }


  ngOnInit(): void {
    this.products = this.foodService.getProducts();
    
  }

}
