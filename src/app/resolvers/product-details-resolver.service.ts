import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GetProductDetailsService } from '../services/get-product-details.service'

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsResolverService implements Resolve<any>{

  constructor(
    private getProductDetailsService: GetProductDetailsService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
    return this.getProductDetailsService.getProductDetail(route.paramMap.get('id'));
  }
}
