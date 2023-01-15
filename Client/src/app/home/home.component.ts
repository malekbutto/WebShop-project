import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Products } from '../shared/models/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // categories:String[] = [];
  products: Products[] = [];
  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm)
        this.products = this.foodService.getAllProductsBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.products = this.foodService.getProductsByTag(params.tag);
      else
        this.products = this.foodService.getProducts();
    })

  }

}
