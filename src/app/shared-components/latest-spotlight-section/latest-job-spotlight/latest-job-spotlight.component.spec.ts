import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestJobSpotlightComponent } from './latest-job-spotlight.component';

describe('LatestJobSpotlightComponent', () => {
  let component: LatestJobSpotlightComponent;
  let fixture: ComponentFixture<LatestJobSpotlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestJobSpotlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestJobSpotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
