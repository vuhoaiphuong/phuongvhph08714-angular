import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  // styleUrls: ['./manage.component.styl']
})
export class ManageComponent implements OnInit {

  selected: Product;
  products: Product[];
  
  constructor(
    private productService: ProductService
  ) { 
    console.log('constructor')
  }

  ngOnInit(){
    this.getProducts();
  }
    showDetail(product){ 
    this.selected = product;
  }
 
  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
    // this.products = this.productService.getProducts();
  }
  removeItem(id){
    this.products = this.products.filter(product => product.id != id)

  }



  changeStatus(){
    // this.product.status = !this.product.status;
  }
  changeName(e){
    // this.product.name = e.target.value;
  }
 

}
