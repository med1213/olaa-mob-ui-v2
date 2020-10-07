import { Routes } from '@angular/router';
import{ HomeResolverService } from '../resolvers/home-resolver.service';
import { BrandSliderService } from '../resolvers/brand-slider-resolver.service';
import { ProductFlagsViewResolverService } from '../views/product-flags/product-flags-view-resolver.service'
import {AdsResolverService} from '../resolvers/ads-resolver.service'
import { ProductDetailsResolverService } from '../resolvers/product-details-resolver.service'


export const GuestLayoutRoutingModule: Routes = [
  {
    path: '',
    loadChildren:() => import('../views/home-view/home-view.module').then(m => m.HomeViewModule),
    resolve: {
      bannerSlides: HomeResolverService,
      brandSlider: BrandSliderService,
      adslist: AdsResolverService,
    } 
  },
  {
    path: 'product-flags/:id',
    resolve: {
      prodsFlagData: ProductFlagsViewResolverService
    },
    loadChildren: () => import ('../views/product-flags/product-flags.module').then( m => m.ProductFlagsModule)
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('../views/product-details/product-detail.module').then( m => m.ProductDetailModule),
    resolve: {
      prodDetailData : ProductDetailsResolverService
    }
  }
]
