import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!: Cart;
  productQuantity: number = 1;
  constructor(private cartService: CartService) {

    this.setCart();
  }

  ngOnInit(): void {
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.product.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.productQuantity += quantity;
    if (this.productQuantity <= 0)
      this.removeFromCart(cartItem);
    else {
      this.cartService.changeQuantity(cartItem.product.id, this.productQuantity);
      this.setCart();
    }
  }

  setCart(): void {
    this.cart = this.cartService.getCart();
  }

}
