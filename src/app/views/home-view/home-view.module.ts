import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ HomeViewComponent } from '../home-view/home-view.component';
import{ HomeViewRoutingModule } from '../home-view/home-view-routing.module';
import { BannerSliderModule } from '../../shared-component/banner-slider/banner-slider.module';
import { BrandSlideModule } from '../../shared-component/brand-slide/brand-slide.module';
import { HomeProductModule } from '../../shared-component/home-product/home-product.module'
import{AdsModule} from '../../shared-component/ads/ads.module';
import {Ads02Module} from '../../shared-component/ads02/ads02.module'

@NgModule({
  declarations: [HomeViewComponent],
  imports: [
    CommonModule,
    HomeViewRoutingModule,
    BannerSliderModule,
    BrandSlideModule,
    HomeProductModule,
    AdsModule,
    Ads02Module
    
  ]
})
export class HomeViewModule { }
