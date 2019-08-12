import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobShortComponent } from './job-short.component';

describe('JobShortComponent', () => {
  let component: JobShortComponent;
  let fixture: ComponentFixture<JobShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
