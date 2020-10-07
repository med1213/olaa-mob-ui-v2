import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerSliderComponent } from './banner-slider.component';



@NgModule({
  declarations: [BannerSliderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BannerSliderComponent
  ]
})
export class BannerSliderModule { }
