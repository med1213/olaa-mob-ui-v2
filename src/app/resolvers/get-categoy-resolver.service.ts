import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GetCategoriesService } from '../services/get-categories.service'

@Injectable({
  providedIn: 'root'
})
export class GetCategoyResolverService implements Resolve<any>{

  constructor(
    private getCategoriesService: GetCategoriesService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
    return this.getCategoriesService.getCates();
  }
}
