import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, share, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { EndPoint } from './end-point';

@Injectable()
export class GetCategoriesService {

  protected getCatesUrl = EndPoint.mainUrl + 'v1/api/categories/get-menu-categories';


  constructor(private http: HttpClient) {
  }

  getCates(): Observable<any> {
    return this.http.get(this.getCatesUrl)
      .pipe(
        take(1),
        share(),
        catchError(() => of('server error'))
      );
  }

}
