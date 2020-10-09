import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestLayoutComponent } from './guest-layout/guest-layout.component';
import { NavsModule } from '../app/navs/navs.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToastComponent } from './toast/toast.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { NavigationService } from './data-sharing/navigation.service';
import { DsCategoriesService } from './data-sharing/ds-categories.service';
import { CategoriesMenuModule } from './shared-component/categories-menu/categories-menu.module';

@NgModule({
  declarations: [
    AppComponent,
    GuestLayoutComponent,
    ToastComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NavsModule,
    HttpClientModule,
    CategoriesMenuModule,
  ],
  exports: [NavsModule],
  providers: [
    NavigationService,
    DsCategoriesService,
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
