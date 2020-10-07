import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EndPoint } from 'src/app/services/end-point';

@Injectable({
  providedIn: 'root'
})
export class BrandSliderService {

  protected emptyBrandSlider: any[] = [];
  protected dsBrandSlider = new BehaviorSubject(this.emptyBrandSlider);
  BrandSlider = this.dsBrandSlider.asObservable();

  constructor() {
  }

  setBannerSlider(arrayList: any[]): void {

    arrayList.forEach(banner=> {
      banner.Url = EndPoint.baseImageUrl + banner.Url
    })
    this.dsBrandSlider.next(arrayList);    
  }

  clearBannerSlider():void {
    this.dsBrandSlider.next(this.emptyBrandSlider);
  }
}
