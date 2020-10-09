import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesMenuComponent } from './categories-menu.component';
import { MenuOrderPipesModule } from '../../pipes/menu-order-pipes.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CategoriesMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    MenuOrderPipesModule
  ],
  exports: [CategoriesMenuComponent]
})
export class CategoriesMenuModule { }
