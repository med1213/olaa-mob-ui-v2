import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFlagsComponent } from './product-flags.component';
import { ProductFlagsRoutingModule } from './product-flags-routing.module'



@NgModule({
  declarations: [ProductFlagsComponent],
  imports: [
    CommonModule,
    ProductFlagsRoutingModule
  ]
})
export class ProductFlagsModule { }
