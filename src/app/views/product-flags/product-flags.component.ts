import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EndPoint } from 'src/app/services/end-point';
import { GetAllProductService } from 'src/app/services/get-all-product.service';
import { ToastService } from 'src/app/toast/toast.service';

@Component({
  selector: 'app-product-flags',
  templateUrl: './product-flags.component.html',
  styleUrls: ['./product-flags.component.scss']
})
export class ProductFlagsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private getProds: GetAllProductService,
    private toast: ToastService,
  ) { }

  private flagId = 0;
  public title = "";
  public showList = [];
  private limitToSee = 12;
  public lengthOfShow = 12;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( res => {      
      this.lengthOfShow = 12;
      this.flagId = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
      switch (this.flagId) {
        case 1:
          this.title = "NEW";
          break;
        case 2:
          this.title = "SUPER DEALS";
          break;
        case 3:
          this.title = "BEST SELLER";
          break;
      }
      this.showList = res.prodsFlagData.map(res => Object.assign({}, res, { ProductImageUrl: EndPoint.baseImageUrl + res.ProductImageUrl }));
      this.toast.showToast = false;
      if (this.showList.length > 0) {
        this.getProds.getProductByFlagId(this.flagId, this.limitToSee, this.limitToSee).subscribe(result => {
          result.map(res => Object.assign({}, res, { ProductImageUrl: EndPoint.baseImageUrl + res.ProductImageUrl })).forEach(res => this.showList.push(res));
        });
      }
    })
  }

  getFlagsList(){
    return this.showList.slice(0, this.lengthOfShow);
  }

  getSeeMoreFunc(){
    this.lengthOfShow += this.limitToSee;
    this.getProds.getProductByFlagId(this.flagId, this.showList[this.showList.length - 1].ID, this.limitToSee).subscribe( res => {
      res.map(res => Object.assign({}, res, { ProductImageUrl: EndPoint.baseImageUrl + res.ProductImageUrl })).forEach(res => this.showList.push(res));
    })
  }

}
