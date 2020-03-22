import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { Data } from '../MockData';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  selected: Product;
  products: Product[];
  constructor(
     private productService: ProductService
  ) { 
    console.log('constructor')
  }

  ngOnInit(): void {
  this.getProduct();
  
  }
  getProduct(){
    this.products=this.productService.getProducts();
    // goi ra phương thức
  }
 
  removeItem(id){
     this.products = this.products.filter(product => product.id != id);
  }
     showDetail(product){
    console.log(this.selected);
    this.selected=product;
     }
  //     changeStatus(){
  //  this.product.status = this.product.status;
    //  }
  

  // product : Product ={
  //   name:'phương',
  //   price:24.99 ,
  //  desc :'Vũ Hoài Phương',
  //  img: 'http://placehold.it/700x400',
  //  status:true
  // }
 
  // changeTitle(e){
  //   // this.product.name=e.target.value;
  // }
 

  //  showDetail(product){
  //   console.log(this.selected);
  //   this.selected=product;
  
  //  }
  //  removeItem(id){
  //    this.products=this.products.filter(this.product => this.product.id != id);
  //  }
}
