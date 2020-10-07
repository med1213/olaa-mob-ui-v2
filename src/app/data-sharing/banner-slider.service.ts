import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EndPoint } from 'src/app/services/end-point';
import { IBannerSlider } from '../interfaces/i-banner-slider';

@Injectable({
  providedIn: 'root'
})
export class BannerSliderService {
  
  protected emptyBannerSlider: IBannerSlider[] = [];
  protected dsBannerSlider = new BehaviorSubject(this.emptyBannerSlider);
  BannerSliders = this.dsBannerSlider.asObservable();

  constructor() {

  }

  setBannerSlider(arrayList: IBannerSlider[]): void {

    arrayList.forEach(banner=> {
      banner.Url = EndPoint.baseImageUrl + banner.Url
    })
    this.dsBannerSlider.next(arrayList);    
  }

  clearBannerSlider():void {
    this.dsBannerSlider.next(this.emptyBannerSlider);
  }

}
