import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../../common/classes/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.getProductsInCart();
  }
  isEmptyCart(products: Product[]) {
    if (typeof products !== 'undefined' && products.length > 0) {
      return !(products);
    }
  }

}
