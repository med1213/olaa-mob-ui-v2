import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISubCategoriesContent } from '../interfaces/i-sub-categories-content';

@Injectable()
export class DsCategoriesService {



  constructor() { }


  listIds: number[] = [];
  listOfProduct: { id: number; list: any[] }[] = [];
  private dsProducts = new BehaviorSubject(this.listOfProduct);
  private listOfProduct$ = this.dsProducts.asObservable();

  protected iSubCategoriesContent: ISubCategoriesContent;

  private mainCategoryList$ = [];

  setAllCateList(data) {
    this.mainCategoryList$ = data;
  }

  setDsProds(data) {
    this.dsProducts.next(data)
  }

  checkChildList(id) {
    if (this.mainCategoryList$.filter(res => res.ParentId == id).length > 0) {
      return true;
    }
    return false;
  }

  getNameById(id) {
    return this.mainCategoryList$.find(ressult => ressult.RefCategoryId == id)
  }

  getAllCateList() {
    return this.mainCategoryList$
  }

}
