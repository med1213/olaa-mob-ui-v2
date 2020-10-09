import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GetProductListCategories } from '../services/get-product-list-categories.service'

@Injectable()
export class ResolveProdsCategory implements Resolve<any>{
    constructor(
        private getProductListCategories: GetProductListCategories
    ) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.getProductListCategories.executeProdsByCateId(parseInt(route.paramMap.get("id")), 0, 12);
    }
}