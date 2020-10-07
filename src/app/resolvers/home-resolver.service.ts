import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GetAdvertisingService } from 'src/app/services/get-advertising.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolverService implements Resolve<any> {

    constructor(
      private getAdvertisingService: GetAdvertisingService,
      ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

      return this.getAdvertisingService.getBannerSliderByImgCatId(1);
    }
}
