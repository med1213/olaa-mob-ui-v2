import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { MenuOrderPipesModule } from '../../pipes/menu-order-pipes.module'



@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    MenuOrderPipesModule,
  ]
})
export class ProductDetailModule { }
