import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GetAllProductService } from '../../services/get-all-product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductFlagsViewResolverService implements Resolve<any>{

  constructor(
    private getFlagsList: GetAllProductService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
    return this.getFlagsList.getProductByFlagId(parseInt(route.paramMap.get("id")), 0, 12)
  }
}
