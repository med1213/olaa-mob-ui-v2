import { Component, Input, OnInit } from '@angular/core';
import { EndPoint } from '../../services/end-point';
import { GetAllProductService } from '../../services/get-all-product.service';
import { DsFlagItemService } from '../../data-sharing/ds-flag-item.service';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.scss']
})
export class HomeProductComponent implements OnInit {

  @Input() flagId = 0;
  @Input() icon = "";
  @Input() title = "";
  @Input() showList = [];
  imgUrl = EndPoint.baseImageUrl;

  constructor(    
    private dsFlagItems: DsFlagItemService,
    private getProd: GetAllProductService,
  ) { }

  ngOnInit(): void {   

    this.dsFlagItems.getFlagItem(this.flagId).subscribe( res => this.showList = res);
    if(this.showList.length === 0){
      this.getProd.getProductByFlagId(this.flagId, 0, 6).subscribe( itm => this.showList = itm);
      switch (this.flagId) {
        case 1:
          localStorage.setItem('numNew', '6');
          break;
        case 2:
          localStorage.setItem('numSp', '6');
          break;
        case 3:
          localStorage.setItem('numBs', '6')
      }
    }
  }


}
