import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ads02Component } from './ads02.component';

describe('Ads02Component', () => {
  let component: Ads02Component;
  let fixture: ComponentFixture<Ads02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ads02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ads02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
