import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DsCategoriesService } from 'src/app/data-sharing/ds-categories.service';
import { NavigationService } from 'src/app/data-sharing/navigation.service';
import { EndPoint } from 'src/app/services/end-point';
import { GetProductListCategories } from 'src/app/services/get-product-list-categories.service';

import { fadeInAnimation } from '../../_animations/index';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.scss'],
  animations: [fadeInAnimation],
  
  providers: [GetProductListCategories],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesMenuComponent implements OnInit {

  constructor(
    public navigationService: NavigationService,
    public dsCategoriesService: DsCategoriesService,
    private getProductListCategories: GetProductListCategories
  ) { }

  index__lv1: number = 2;
  name__lv1: string = "";

  ngOnInit(): void {
    
  }

  getCurrentCate(id, name){
    this.index__lv1 = id;
    this.name__lv1 = name;
  }

  alreadyHasCate(cateid, count): boolean {
    if (!this.dsCategoriesService.checkChildList(cateid)) {

      if (this.dsCategoriesService.listIds.length > 0) {
        if (this.dsCategoriesService.listIds.every(res => res != cateid)) {
          this.dsCategoriesService.listIds.push(cateid);
          this.getProductListCategories.executeProdMenu(cateid, count).subscribe((result: []) => {
            this.dsCategoriesService.listOfProduct.push({ id: cateid, list: result.map((res: any) => Object.assign({}, res, { ProductImageUrl: EndPoint.baseImageUrl + res.ProductImageUrl })) });
            this.dsCategoriesService.setDsProds(this.dsCategoriesService.listOfProduct);
          });
          return true;
        }
      } else {
        this.dsCategoriesService.listIds.push(cateid);
        this.getProductListCategories.executeProdMenu(cateid, count).subscribe((result: []) => {
          this.dsCategoriesService.listOfProduct.push({ id: cateid, list: result.map((res: any) => Object.assign({}, res, { ProductImageUrl: EndPoint.baseImageUrl + res.ProductImageUrl })) });
          this.dsCategoriesService.setDsProds(this.dsCategoriesService.listOfProduct);
        });
      }
      return true;
    } else {
      return false;
    }

  }

}
