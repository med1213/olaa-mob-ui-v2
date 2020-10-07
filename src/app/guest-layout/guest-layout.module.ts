import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GuestLayoutRoutingModule } from './guest-layout-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(GuestLayoutRoutingModule)
  ],
  exports: []
})
export class GuestLayoutModule { }
