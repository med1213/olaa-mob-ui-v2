import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GetAllProductService } from 'src/app/services/get-all-product.service';

export class ProductFlagsResolverService implements Resolve<any>{

  constructor(
    private getProductFlags: GetAllProductService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
    return this.getProductFlags.getProductByFlagId(parseInt(route.paramMap.get("id")),0,12);
  }
}
