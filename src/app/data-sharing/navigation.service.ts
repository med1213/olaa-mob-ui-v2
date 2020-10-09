import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISubCategoriesContent } from '../interfaces/i-sub-categories-content';

@Injectable()
export class NavigationService {


  categoryName = "";
  toggleLeftSideMenu: boolean = false;
  toggleCategory: boolean = false;

  protected dsToggleCategory = new BehaviorSubject(this.toggleCategory);
  toggleCategory$ = this.dsToggleCategory.asObservable();

  protected dsToggleLeftSideMenu = new BehaviorSubject(this.toggleLeftSideMenu);
  toggleLeftSideMenu$ = this.dsToggleLeftSideMenu.asObservable();

  constructor() {

  }


  updateToggleCategory() {
    this.dsToggleCategory.next(this.toggleCategory)
  }
  updateToggleLeftSideMenu() {
    this.toggleCategory = false;
    this.dsToggleCategory.next(this.toggleCategory)
    this.dsToggleLeftSideMenu.next(this.toggleLeftSideMenu)
  }



}
