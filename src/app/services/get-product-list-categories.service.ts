import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { EndPoint } from './end-point';
import { take, share, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';


@Injectable()
export class GetProductListCategories {

    protected urlGetProdMenuCategory = EndPoint.mainUrl + "v2/api/products/get/get-products-categories-items";
    protected urlGetProdByCateId = EndPoint.mainUrl + "v2/api/products/get/get-products-by-categories";

    constructor(private http: HttpClient) {
    }


    executeProdMenu(cateIdList: number, count: number): Observable<any> {
        const params = new HttpParams({ fromObject: { refCatId: cateIdList.toString(), count: count.toString() } });
        return this.http.get(this.urlGetProdMenuCategory, { params: params }).pipe(
            take(1),
            share(),
            catchError(() => of("server error"))
        )
    }


    executeProdsByCateId(refCatId: number, totalid: number, count: number): Observable<any> {
        const params = new HttpParams()
            .append('refCatId', refCatId.toString())
            .append('totalid', totalid.toString())
            .append('count', count.toString());
        return this.http.get(this.urlGetProdByCateId, { params: params }).pipe(
            take(1),
            share(),
            catchError(() => of("server error"))
        );
    }

    executeProdsByCateIdAndFlag(refCatId: number, totalid: number, count: number, flagId: number): Observable<any> {
        const params = new HttpParams()
            .append('refCatId', refCatId.toString())
            .append('totalid', totalid.toString())
            .append('count', count.toString())
            .append('flagId', flagId.toString());
        return this.http.get(this.urlGetProdByCateId, { params: params }).pipe(
            take(1),
            share(),
            catchError(() => of("server error"))
        );
    }

    executeProdsByCateIdAndFlagAndBrand(refCatId: number, totalid: number, count: number, flagId: number, brand: string): Observable<any> {
        const params = new HttpParams()
            .append('refCatId', refCatId.toString())
            .append('totalid', totalid.toString())
            .append('count', count.toString())
            .append('flagId', flagId.toString())
            .append('brand', brand.toString());
        return this.http.get(this.urlGetProdByCateId, { params: params }).pipe(
            take(1),
            share(),
            catchError(() => of("server error"))
        );
    }

    executeProdsByCateIdAndBrand(refCatId: number, totalid: number, count: number, brand: string): Observable<any> {
        const params = new HttpParams()
            .append('refCatId', refCatId.toString())
            .append('totalid', totalid.toString())
            .append('count', count.toString())
            .append('brand', brand.toString());
        return this.http.get(this.urlGetProdByCateId, { params: params }).pipe(
            take(1),
            share(),
            catchError(() => of("server error"))
        );
    }

    executeProdsByCateIdAndPrice(refCatId: number, totalid: number, count: number, priceLowToHigh: boolean): Observable<any> {
        const params = new HttpParams()
            .append('refCatId', refCatId.toString())
            .append('totalid', totalid.toString())
            .append('count', count.toString())
            .append('priceLowToHigh', priceLowToHigh.toString());
        return this.http.get(this.urlGetProdByCateId, { params: params }).pipe(
            take(1),
            share(),
            catchError(() => of("server error"))
        );
    }

    executeProdsByCateIdAndPriceAndBrand(refCatId: number, totalid: number, count: number, priceLowToHigh: boolean, brand: string): Observable<any> {
        const params = new HttpParams()
            .append('refCatId', refCatId.toString())
            .append('totalid', totalid.toString())
            .append('count', count.toString())
            .append('priceLowToHigh', priceLowToHigh.toString())
            .append('brand', brand.toString());
        return this.http.get(this.urlGetProdByCateId, { params: params }).pipe(
            take(1),
            share(),
            catchError(() => of("server error"))
        );
    }



}