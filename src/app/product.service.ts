import { Injectable } from '@angular/core';
import { Data } from './MockData';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = Data;
  constructor() { }

  getProducts(){
    return this.products;
  }
  removeProduct(id){
    return this.products.filter(product => product.id != id);
  }
  addProduct(product){
    const newProduct = { id: 5, ...product};
    this.products.push(newProduct);
    console.log(this.products)
  }
}