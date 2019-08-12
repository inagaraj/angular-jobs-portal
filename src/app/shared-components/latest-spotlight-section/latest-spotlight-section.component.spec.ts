import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestSpotlightSectionComponent } from './latest-spotlight-section.component';

describe('LatestSpotlightSectionComponent', () => {
  let component: LatestSpotlightSectionComponent;
  let fixture: ComponentFixture<LatestSpotlightSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestSpotlightSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestSpotlightSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
