import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GuestLayoutRoutingModule } from './guest-layout-routing.module';
import { GetProductListCategories } from '../services/get-product-list-categories.service';
import { ResolveProdsCategory } from '../resolvers/resolve-prods-category.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(GuestLayoutRoutingModule)
  ],
  exports: [],
  providers: [
    GetProductListCategories,
    ResolveProdsCategory
  ]
})
export class GuestLayoutModule { }
