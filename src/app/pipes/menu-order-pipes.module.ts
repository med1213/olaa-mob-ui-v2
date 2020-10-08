import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOderPipes } from './menu-order.pipes';

@NgModule({
  declarations: [MenuOderPipes],
  imports: [
    CommonModule    
  ],
  exports: [
    MenuOderPipes
  ]
})
export class MenuOrderPipesModule { }