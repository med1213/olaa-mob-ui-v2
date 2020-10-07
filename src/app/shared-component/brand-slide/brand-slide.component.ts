import { Component, OnInit } from '@angular/core';
import { BrandSliderService } from '../../data-sharing/brand-slider.service';



@Component({
  selector: 'app-brand-slide',
  templateUrl: './brand-slide.component.html',
  styleUrls: ['./brand-slide.component.scss']
})
export class BrandSlideComponent implements OnInit {
  constructor(
   public brandSliderService: BrandSliderService
  ) { }
  
  ngOnInit() {
    
  }
 

}
