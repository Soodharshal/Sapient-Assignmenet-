import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCountDownSubjectComponent } from './display-count-down-subject.component';

describe('DisplayCountDownSubjectComponent', () => {
  let component: DisplayCountDownSubjectComponent;
  let fixture: ComponentFixture<DisplayCountDownSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCountDownSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCountDownSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
