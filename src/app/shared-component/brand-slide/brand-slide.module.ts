import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrandSlideComponent } from './brand-slide.component';

@NgModule({
    declarations: [BrandSlideComponent],
    imports: [
        CommonModule
    ],
    exports: [BrandSlideComponent]
})
export class BrandSlideModule { }
