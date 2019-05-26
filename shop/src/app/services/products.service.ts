import { Injectable } from '@angular/core';
import { Product } from '../common/classes/product';
import { ProdCategory } from '../common/prodCategory';


let products:  Product[] = [
  {
    id: "b1d2cc08-4144-4758-84d0-83ba008d4a08",
    name: "Wine - Sauvignon Blanc",
    description: "vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique",
    price: 915.91,
    category: ProdCategory.Tablet,
    isAvaliable: true
  }, {
    id: "44301afb-681f-4bc7-a224-8e0376ef7010",
    name: "Bagelers - Cinn / Brown Sugar",
    description: "sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in",
    price: 1171.12,
    category: ProdCategory.PC,
    isAvaliable: false
  }, {
    id: "4f7f507f-2cea-4cd0-aff7-00d6c29d1e20",
    name: "Ginger - Fresh",
    description: "ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan",
    price: 788.29,
    category: ProdCategory.Notebook,
    isAvaliable: true
  }, {
    id: "c3adcaeb-b717-4a72-b101-851cacebfa00",
    name: "Lettuce - Iceberg",
    description: "eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis",
    price: 914.54,
    category: ProdCategory.Phone,
    isAvaliable: true
  }, {
    id: "157c714e-6ded-47ef-8286-3652cf4ea02d",
    name: "Mustard - Pommery",
    description: "praesent blandit lacinia erat vestibulum sed magna at nunc commodo",
    price: 1426.10,
    category: ProdCategory.Tablet,
    isAvaliable: false
  }];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products: Product[] = products;
  constructor() { }

  public getProducts(): Product[] {
    return this.products;
  }

}
