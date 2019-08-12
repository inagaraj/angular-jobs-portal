import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSpecialComponent } from './about-special.component';

describe('AboutSpecialComponent', () => {
  let component: AboutSpecialComponent;
  let fixture: ComponentFixture<AboutSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
