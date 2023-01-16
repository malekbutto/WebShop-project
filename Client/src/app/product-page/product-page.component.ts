import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
// import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Products } from '../shared/models/products';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  product!: Products;
  constructor(private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        this.product = foodService.getProductById(params.id);
    })
  }

  ngOnInit(): void {
  
  }

  addToCart(){
    this.cartService.addToCart(this.product);
    // this.router.navigateByUrl('/cart-page');
  }

}
