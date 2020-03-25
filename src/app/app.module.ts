import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SlideComponent } from './slide/slide.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { HomeComponent } from './home/home.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ManageComponent } from './manage/manage.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SlideComponent,
    ProductComponent,
    CategoryComponent,
    ProductAddComponent,
    HomeComponent,
    ProductEditComponent,
    ProductDetailComponent,
    ManageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }




