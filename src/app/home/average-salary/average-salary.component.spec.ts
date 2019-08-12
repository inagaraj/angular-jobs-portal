import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageSalaryComponent } from './average-salary.component';

describe('AverageSalaryComponent', () => {
  let component: AverageSalaryComponent;
  let fixture: ComponentFixture<AverageSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
