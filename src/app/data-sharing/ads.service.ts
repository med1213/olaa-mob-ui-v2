import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EndPoint } from '../services/end-point'

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  protected adsData : any[] = [];
  protected dsAdsData = new BehaviorSubject(this.adsData);
  adsData$ = this.dsAdsData.asObservable();

  constructor() { }
  setAds(arrayList: any[]): void{    
    arrayList.forEach(ads=>{
      ads.Url = EndPoint.baseImageUrl + ads.Url
    } )
    this.dsAdsData.next(arrayList);
  }
}
