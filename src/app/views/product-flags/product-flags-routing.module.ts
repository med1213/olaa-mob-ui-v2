import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductFlagsComponent } from './product-flags.component'

const routes: Routes = [
  {
    path: '',
    component: ProductFlagsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductFlagsRoutingModule { }
