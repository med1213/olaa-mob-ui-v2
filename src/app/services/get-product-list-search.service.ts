import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { take, share, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { EndPoint } from './end-point';
@Injectable()
export class GetProductListSearchService {

    private urlGetProdBySearch = EndPoint.mainUrl + "v2/api/products/get/get-products-by-search";

    constructor(private http: HttpClient) { }

    executeProdsBySearch(searchValue: string, totalid: number, count: number): Observable<any> {
        const params = new HttpParams({ fromObject: { searchValue: searchValue, totalid: totalid.toString(), count: count.toString() } })
        return this.http.get(this.urlGetProdBySearch, { params: params }).pipe(
            take(1),
            share(),
            catchError(() => of("Server Error"))
        )
    }

    executeProdsBySearchAndFlag(searchValue: string, totalid: number, count: number, flagId: number): Observable<any> {
        const params = new HttpParams()
            .append('searchValue', searchValue)
            .append('totalid', totalid.toString())
            .append('count', count.toString())
            .append('flagId', flagId.toString());
        return this.http.get(this.urlGetProdBySearch, { params: params }).pipe(
            take(1),
            share(),
            catchError(() => of("server error"))
        );
    }

    executeProdsBySearchAndFlagAndBrand(searchValue: string, totalid: number, count: number, flagId: number, brand: string): Observable<any> {
        const params = new HttpParams()
            .append('searchValue', searchValue)
            .append('totalid', totalid.toString())
            .append('count', count.toString())
            .append('flagId', flagId.toString())
            .append('brand', brand.toString());
        return this.http.get(this.urlGetProdBySearch, { params: params }).pipe(
            take(1),
            share(),
            catchError(() => of("server error"))
        );
    }

    executeProdsBySearchAndBrand(searchValue: string, totalid: number, count: number, brand: string): Observable<any> {
        const params = new HttpParams()
            .append('searchValue', searchValue)
            .append('totalid', totalid.toString())
            .append('count', count.toString())
            .append('brand', brand.toString());
        return this.http.get(this.urlGetProdBySearch, { params: params }).pipe(
            take(1),
            share(),
            catchError(() => of("server error"))
        );
    }

    executeProdsBySearchAndPrice(searchValue: string, totalid: number, count: number, priceLowToHigh: boolean): Observable<any> {
        const params = new HttpParams()
            .append('searchValue', searchValue)
            .append('totalid', totalid.toString())
            .append('count', count.toString())
            .append('priceLowToHigh', priceLowToHigh.toString());
        return this.http.get(this.urlGetProdBySearch, { params: params }).pipe(
            take(1),
            share(),
            catchError(() => of("server error"))
        );
    }

    executeProdsBySearchAndPriceAndBrand(searchValue: string, totalid: number, count: number, priceLowToHigh: boolean, brand: string): Observable<any> {
        const params = new HttpParams()
            .append('searchValue', searchValue)
            .append('totalid', totalid.toString())
            .append('count', count.toString())
            .append('priceLowToHigh', priceLowToHigh.toString())
            .append('brand', brand.toString());
        return this.http.get(this.urlGetProdBySearch, { params: params }).pipe(
            take(1),
            share(),
            catchError(() => of("server error"))
        );
    }

}