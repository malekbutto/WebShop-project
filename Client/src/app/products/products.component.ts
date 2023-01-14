import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Products } from '../shared/models/products';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Products[] = [];
  constructor(private foodService: FoodService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm)
        this.products = this.foodService.getProducts().filter(product =>
          product.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
      else if (params.tag)
          this.products = this.foodService.getProductsByTag(params.tag);
      else
        this.products = this.foodService.getProducts();

    })

  }

}
