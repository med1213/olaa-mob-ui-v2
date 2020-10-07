import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, share, take } from 'rxjs/operators';
import { EndPoint } from './end-point';

@Injectable({
  providedIn: 'root'
})
export class GetAllProductService {

  constructor(
    private http: HttpClient
  ) { }

  protected getProductFlags = EndPoint.mainUrl + `v2/api/products/get/get-products-by-flags`;

  getProductFlagsFunc(){

    const numNew = localStorage.getItem('numNew') !== null ? localStorage.getItem('numNew') : '0';
    const numSp = localStorage.getItem('numSp') !== null ? localStorage.getItem('numSp') : '0';
    const numBs = localStorage.getItem('numBs') !== null ? localStorage.getItem('numBs') : '0';
    const newParams = new HttpParams()
      .append('refflagid', '1')
      .append('totalid', numNew)
      .append('count', '6');
    const spParams = new HttpParams()
      .append('refflagid', '2')
      .append('totalid', numSp)
      .append('count', '6');
    const bsParams = new HttpParams()
      .append('refflagid', '3')
      .append('totalid', numBs)
      .append('count', '6');
    return forkJoin(this.http.get(this.getProductFlags, { params: newParams }), this.http.get(this.getProductFlags, { params: spParams }), this.http.get(this.getProductFlags, { params: bsParams }))
      .pipe(
        take(1),
        share(),
        catchError(() => of('server error'))
      );

  }

  getProductByFlagId(flagId: number, totalid: number, count: number): Observable<any> {
    const params = new HttpParams()
      .append('refflagid', flagId.toString())
      .append('totalid', totalid.toString())
      .append('count', count.toString());
    return this.http.get(this.getProductFlags, { params: params }).pipe(
      take(1),
      share(),
      catchError(() => of("server error"))
    );
  }

}
