import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take, share, catchError } from 'rxjs/operators';
import { EndPoint } from './end-point'
@Injectable()
export class GetBrandByCategoryId {

    private urlToGetBrands = EndPoint.mainUrl + "v2/api/products/get/get-brand-name-by-category-id";

    constructor(private http: HttpClient) { }

    executeBrands(id): Observable<any> {
        const params = new HttpParams().append('catid', id)
        return this.http.get(this.urlToGetBrands, { params: params }).pipe(
            take(1),
            share(),
            catchError(() => of('Server Error'))
        )
    }
}