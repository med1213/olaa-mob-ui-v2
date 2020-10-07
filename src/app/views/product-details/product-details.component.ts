import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EndPoint } from '../../services/end-point'
import {Location} from "@angular/common"
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private routes: ActivatedRoute,
    private goBack: Location,    
    private renderer: Renderer2,
  ) { }

  public imageCover: {}[] = [];
  public imageOverview: {}[] = [];
  public productInfo;

  preview__index = 1;
  detail__index = 0;
  private tSContainer: Element;
  private subscription: Subscription[] = [];

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

  ngAfterViewInit(): void {
    this.tSContainer = document.getElementById("slideWrapper");
    this.subscription.push(
      fromEvent(this.tSContainer, "scroll")
        .pipe(debounceTime(100))
        .subscribe(() => {
          if (((this.tSContainer.scrollLeft / this.tSContainer.clientWidth) % 1) > 0.5) {
            this.renderer.setProperty(this.tSContainer, 'scrollLeft', `${this.tSContainer.clientWidth * Math.ceil(this.tSContainer.scrollLeft / this.tSContainer.clientWidth)}`);
          } else {
            this.renderer.setProperty(this.tSContainer, 'scrollLeft', `${this.tSContainer.clientWidth * Math.floor(this.tSContainer.scrollLeft / this.tSContainer.clientWidth)}`);
          }
          this.preview__index = (Math.floor(document.getElementById("slideWrapper").scrollLeft / document.getElementById("slideWrapper").clientWidth) + 1);
        })
    );

    // this.productInfo.Spec.forEach(element => {
    //   if (element.ProductLabelId == 14) {
    //     this.getProdDetail.getProdSpecImgById(element.ProductDetailId).subscribe((result: any[]) => result.forEach(res => this.specImg.push({ OrderIndex: res.OrderIndex, ImageUrl: EndPoint.baseImageUrl + res.ImageUrl })));
    //   } else if (element.ProductLabelId == 15) {
    //     this.getProdDetail.getProdSpecLinkById(element.ProductDetailId).subscribe((result: any[]) => result.forEach(res => this.specLink.push({ Label: res.Label, LinkUrl: res.LinkUrl, OrderIndex: res.OrderIndex })))
    //   }
    // });
    // this.toast.showToast = false;
  }

  backFunc(){
    this.goBack.back();
  }

}
