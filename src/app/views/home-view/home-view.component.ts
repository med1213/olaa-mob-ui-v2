import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BannerSliderService } from 'src/app/data-sharing/banner-slider.service';
import { BrandSliderService } from 'src/app/data-sharing/brand-slider.service';
import {AdsService} from '../../data-sharing/ads.service';
@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  constructor(
    private bannerSliderService: BannerSliderService,
    private route: ActivatedRoute,
    private brandSlider : BrandSliderService,
    private adsServive : AdsService,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      result => {
        this.bannerSliderService.setBannerSlider(result.bannerSlides); 
        this.brandSlider.setBannerSlider(result.brandSlider); 
        
        if(result.adslist !=null){
          this.adsServive.setAds(result.adslist) 
        }
          
      }
    )
  }

}
