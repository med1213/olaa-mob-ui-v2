import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads.component';



@NgModule({
  declarations: [AdsComponent],
  imports: [
    CommonModule
  ],
  exports: [
      AdsComponent
  ]
})
export class AdsModule { }
