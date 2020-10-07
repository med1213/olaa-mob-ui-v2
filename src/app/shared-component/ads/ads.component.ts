import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import {AdsService} from '../../data-sharing/ads.service'
@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  constructor(private service : AdsService) { }
    ads :any[] = [];

  ngOnInit(): void {
    this.service.adsData$.subscribe(res => {
      var array =  res.filter(itx => itx.OrderIndex == 2)
      if(array.length > 1){
        this.ads.push(res.filter(itx => itx.OrderIndex == 2).slice(array.length - 1, array.length))
      }
      this.ads.push(array);
      
    })
  }

}
