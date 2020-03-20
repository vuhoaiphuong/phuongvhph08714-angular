import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './product/product.component';
import { SlideComponent } from './slide/slide.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductComponent, SlideComponent, ProductListComponent, CategoryComponent, ProductAddComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }