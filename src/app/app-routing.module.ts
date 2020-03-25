import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'manage',component:ManageComponent},
  {path:'add-product',component:ProductAddComponent},
  {path:'product-list',component:ProductListComponent},
  {path: 'product/:productID', component: ProductDetailComponent},
    {path: 'product/edit/:productID', component: ProductEditComponent},
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }