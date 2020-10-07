import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeProductComponent } from './home-product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ HomeProductComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ HomeProductComponent ]
})
export class HomeProductModule { }
