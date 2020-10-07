import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GetAdvertisingService } from 'src/app/services/get-advertising.service';

@Injectable({
  providedIn: 'root'
})
export class BrandSliderService implements Resolve<any> {
  
  constructor(private getAdvertisingService: GetAdvertisingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
    return this.getAdvertisingService.getBrandSlide(2);
  }
}
