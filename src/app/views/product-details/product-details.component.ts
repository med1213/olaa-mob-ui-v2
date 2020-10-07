import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EndPoint } from '../../services/end-point'
import {Location} from "@angular/common"

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private routes: ActivatedRoute,
    private goBack: Location,
  ) { }

  public imageCover: {}[] = [];
  public imageOverview: {}[] = [];
  public productInfo;

  ngOnInit(): void {
    this.loadData()

  }

  async loadData() {
    await this.routes.data.subscribe(result => { 
    
      this.imageCover = result.prodDetailData[1].filter(res => res.ProductImageSizeCategoryId == 1).map(res => Object.assign({}, res, { Url: `${EndPoint.baseImageUrl}${res.Url}` }));
      this.imageOverview = result.prodDetailData[1].filter(res => res.ProductImageSizeCategoryId == 4).map(res => Object.assign({}, res, { Url: `${EndPoint.baseImageUrl}${res.Url}` }));
      this.productInfo = {
        ProductName: result.prodDetailData[0].ProductName,
        ProductDescription: result.prodDetailData[2],
        NoStock: result.prodDetailData[0].HasStock,
        Flags: [result.prodDetailData[0].RefFlag1Id, result.prodDetailData[0].RefFlag2Id, result.prodDetailData[0].RefFlag3Id],
        Color: [],
        RRP: result.prodDetailData[0].RRP,
        SRP: result.prodDetailData[0].SRP,
        InTheBox: result.prodDetailData[3].find(res => res.ProductLabelId == 13).Description,
        Spec: result.prodDetailData[3].filter(res => res.ProductLabelId != 13)
      };

    });
    // this.toast.showToast = false;
  }

  backFunc(){
    this.goBack.back();
  }

}
