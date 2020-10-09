import { Component, OnInit } from '@angular/core';
import { EndPoint } from 'src/app/services/end-point';
import { NavigationService } from '../../data-sharing/navigation.service';
import { fadeInAnimation } from '../../_animations/index';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
  
  animations: [fadeInAnimation]
})
export class FooterMenuComponent implements OnInit {

  baseUrl = EndPoint.mainUrl + 'files/'
  
  constructor(
    public navigationService: NavigationService,
  ) { }

  ngOnInit(): void {
  }

  toggleCategory() {
    this.navigationService.toggleCategory = !this.navigationService.toggleCategory
    this.navigationService.updateToggleCategory();
  }

}
