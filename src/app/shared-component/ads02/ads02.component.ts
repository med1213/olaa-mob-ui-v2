import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/data-sharing/ads.service';

@Component({
  selector: 'app-ads02',
  templateUrl: './ads02.component.html',
  styleUrls: ['./ads02.component.scss']
})
export class Ads02Component implements OnInit {
  adsColonm1 : any[] = []
  adsColonm2 : any[] = []
  adsColonm3 : any[] = []
  adsColonm4 : any[] = []
  // adsList : any[] = [];
  constructor(private service : AdsService) { }

  ngOnInit(): void {
    // console.log(this.service.adsData$);

    this.service.adsData$.subscribe(res=> {
      this.getAdsFunc(res, 2);
      this.getAdsFunc(res, 3);
      this.getAdsFunc(res, 4);
      this.getAdsFunc(res, 5);
      // var adsIndex1 =res.filter(itx => itx.OrderIndex == 2);
      // if(adsIndex1.length > 1){
      //   this.adsColonm1.push(adsIndex1.slice(adsIndex1.length - 1 , adsIndex1.length))
      // }
      // this.adsColonm1.push(adsIndex1);
      
    })
  }

  getAdsFunc(adsArrary, index){
    var adsIndex =adsArrary.filter(itx => itx.OrderIndex == index);
    if(adsIndex.length > 1){
      (index == 2)?this.adsColonm1.push(adsIndex.slice(adsIndex.length - 1 , adsIndex.length)) : '';
      (index == 3)?this.adsColonm2.push(adsIndex.slice(adsIndex.length - 1 , adsIndex.length)) : '';
      (index == 4)?this.adsColonm3.push(adsIndex.slice(adsIndex.length - 1 , adsIndex.length)) : '';
      (index == 5)?this.adsColonm4.push(adsIndex.slice(adsIndex.length - 1 , adsIndex.length)) : '';
      
    }

    (index == 2)?this.adsColonm1.push(adsIndex) : '';
    (index == 3)?this.adsColonm2.push(adsIndex) : '';
    (index == 4)?this.adsColonm3.push(adsIndex) : '';
    (index == 5)?this.adsColonm4.push(adsIndex) : '';
   


  }

}
