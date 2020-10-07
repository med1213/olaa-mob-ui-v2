import { Injectable } from '@angular/core';
import { EndPoint } from './end-point';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { share, catchError, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetProductDetailService {


  protected getProductListStore = EndPoint.mainUrl + 'v2/api/products/get/get-product-detail?pid=';
  protected getProductImage = EndPoint.mainUrl + 'v1/api/products/get/product-images-pid?pid=';
  protected getProductDescription = EndPoint.mainUrl + "v1/api/products/get/get-product-desc-by-pid?pid=";
  protected getProductGroupDetail = EndPoint.mainUrl + "v1/api/products/get/get-product-group-details-by-pid?pid=";
  protected getProductGroupDetailSpecImg = EndPoint.mainUrl + "v1/api/products/get/get-product-group-details-spec-img-by-pid?id=";
  protected getProductGroupDetailSpecLink = EndPoint.mainUrl + "v1/api/products/get/get-product-group-details-spec-link-by-pid?id=";


  protected getDetailGroupSpecLinkUrl = EndPoint.mainUrl + "v1/api/products/get/get-product-group-details-spec-link-by-pid?id=";
  protected getDetailGroupSpecImgUrl = EndPoint.mainUrl + "v1/api/products/get/get-product-group-details-spec-img-by-pid?id=";

  constructor(private http: HttpClient) {
  }

  getProductDetail(id): Observable<any> {
    return forkJoin([
      this.http.get(`${this.getProductListStore}${id}`),
      this.http.get(`${this.getProductImage}${id}`),
      this.http.get(`${this.getProductDescription}${id}`),
      this.http.get(`${this.getProductGroupDetail}${id}`)
    ]).pipe(
      take(1),
      share(),
      catchError(() => of('server error'))
    )
  }

  getProdSpecLinkById(id) {
    return this.http.get(`${this.getDetailGroupSpecLinkUrl}${id}`).pipe(
      take(1),
      share(),
      catchError(() => of('server error'))
    )
  }

  getProdSpecImgById(id) {
    return this.http.get(`${this.getDetailGroupSpecImgUrl}${id}`).pipe(
      take(1),
      share(),
      catchError(() => of('server error'))
    )
  }
}
