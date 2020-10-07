import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EndPoint } from './end-point';
import { catchError } from 'rxjs/operators';
import { IBannerSlider } from '../interfaces/i-banner-slider';

@Injectable({
  providedIn: 'root'
})
export class GetAdvertisingService {

  protected getAds = EndPoint.mainUrl + 'v2/api/products/get/get-banner-slider-images'

  constructor(private http: HttpClient) { }

  getBannerSliderByImgCatId(id: number): Observable<any> {

    const params = new HttpParams()
    .set('id', id.toString());

    return this.http.get<IBannerSlider[]>(this.getAds, { params: params })
      .pipe(        
        catchError(() => of('server error'))
      );
  }

  getBrandSlide(id: number): Observable<any>{
    const brandParam = new HttpParams()
      .set('id', id.toString());
    return this.http.get(this.getAds, {params:brandParam})
      .pipe(
 
        catchError(() => of('server error'))
      );
  }

  getAdsList(id: number): Observable<any>{
    const ads = new HttpParams()
    .set('id', id.toString());
  return this.http.get(this.getAds, {params:ads})
    .pipe(

      catchError(() => of('server error'))
    );
  }

}
