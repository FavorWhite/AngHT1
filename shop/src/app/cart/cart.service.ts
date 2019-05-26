import { Injectable } from '@angular/core';
import { Product } from '../common/classes/product';
import { ProdCategory } from '../common/prodCategory';

const boughtProducts: Product[] = [
  {
    id: 'b1d2cc08-4144-4758-84d0-83ba008d4a08',
    name: 'Wine - Sauvignon Blanc',
    description: 'vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique',
    price: 915.91,
    category: ProdCategory.Tablet,
    isAvaliable: true
  }, {
    id: '44301afb-681f-4bc7-a224-8e0376ef7010',
    name: 'Bagelers - Cinn / Brown Sugar',
    description: 'sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in',
    price: 1171.12,
    category: ProdCategory.PC,
    isAvaliable: false
  }];

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = boughtProducts;
  constructor() { }

  public getProductsInCart(): Product[] {
    return this.products;
  }
}
