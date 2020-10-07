import { Component, ElementRef, OnInit, OnDestroy, Renderer2, AfterViewInit } from '@angular/core';
import { Subscription, timer, fromEvent } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { BannerSliderService } from '../../data-sharing/banner-slider.service';

@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.scss']
})
export class BannerSliderComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(
    public bannerSliderService: BannerSliderService,
    protected el: ElementRef,
    private renderer: Renderer2,
  ) { }

  index = 0;
  slide__right = true;
  slide__length = 0;

  private tsContainer: Element;
  protected myInterval: Subscription;
  protected scrollEvent: Subscription;

  ngOnInit(): void {
    this.bannerSliderService.BannerSliders.subscribe( res => this.slide__length = res.length)
  }

  ngAfterViewInit(): void {
    this.tsContainer = this.el.nativeElement.querySelector("#touchSlideContainer");
    this.myInterval = timer(3000).subscribe(this.animateFunc());
    this.scrollEvent = fromEvent(this.tsContainer, "scroll").pipe(debounceTime(500),
      switchMap(() => {
        this.myInterval.unsubscribe();
        if (((this.tsContainer.scrollLeft / this.tsContainer.clientWidth) % 1) > 0.5) {
          this.renderer.setProperty(this.tsContainer, 'scrollLeft', `${this.tsContainer.clientWidth * Math.ceil(this.tsContainer.scrollLeft / this.tsContainer.clientWidth)}`);
        } else {
          this.renderer.setProperty(this.tsContainer, 'scrollLeft', `${this.tsContainer.clientWidth * Math.floor(this.tsContainer.scrollLeft / this.tsContainer.clientWidth)}`);
        }
        if (this.index < Math.floor(this.tsContainer.scrollLeft / this.tsContainer.clientWidth)) {
          this.slide__right = true;
        } else if (this.index == Math.floor(this.tsContainer.scrollLeft / this.tsContainer.clientWidth)) {
          this.slide__right = !this.slide__right;
        }
        else {
          this.slide__right = false;
        }
        this.index = Math.floor(this.tsContainer.scrollLeft / this.tsContainer.clientWidth);
        return timer(3000)
      }))
      .subscribe(this.animateFunc())
  }

  animateFunc() {
    return () => {
      if ((this.index === 0) || ((this.index < (this.slide__length - 1)) && this.slide__right)) {
        this.slide__right = true;
        this.renderer.setProperty(this.tsContainer, 'scrollLeft', `${this.tsContainer.clientWidth * (this.index + 1)}`);
      } else if ((this.index === (this.slide__length - 1)) || ((this.index > 0) && !this.slide__right)) {
        this.slide__right = false;
        this.renderer.setProperty(this.tsContainer, 'scrollLeft', `${this.tsContainer.clientWidth * (this.index - 1)}`);
      }
    }
  }

  ngOnDestroy(): void {
    this.myInterval.unsubscribe();
    this.scrollEvent.unsubscribe();
  }

}
