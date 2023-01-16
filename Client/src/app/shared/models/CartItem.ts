import { Products } from "./products";

export class CartItem{
    
    constructor(product:Products) {
        this.product = product;
        // this.price;
    }
    product:Products;
    quantity:number = 1;

    get price():number{
        return this.product.price * this.quantity;
    }
}