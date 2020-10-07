import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ HomeViewComponent } from '../home-view/home-view.component';
import{ HomeViewRoutingModule } from '../home-view/home-view-routing.module';
import { BannerSliderModule } from '../../shared-component/banner-slider/banner-slider.module';
import { BrandSlideModule } from '../../shared-component/brand-slide/brand-slide.module';
import { HomeProductModule } from '../../shared-component/home-product/home-product.module'



@NgModule({
  declarations: [HomeViewComponent],
  imports: [
    CommonModule,
    HomeViewRoutingModule,
    BannerSliderModule,
    BrandSlideModule,
    HomeProductModule
  ]
})
export class HomeViewModule { }
