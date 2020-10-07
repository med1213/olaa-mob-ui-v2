import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeraderComponent } from './herader.component';

describe('HeraderComponent', () => {
  let component: HeraderComponent;
  let fixture: ComponentFixture<HeraderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeraderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
