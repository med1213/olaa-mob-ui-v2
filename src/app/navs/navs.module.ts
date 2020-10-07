import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { HeraderComponent } from './header/herader.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FooterMenuComponent, HeraderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterMenuComponent,
    HeraderComponent
  ]
})
export class NavsModule { }
