import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncationalityCountDownSubjectComponent } from './funcationality-count-down-subject.component';

describe('FuncationalityCountDownSubjectComponent', () => {
  let component: FuncationalityCountDownSubjectComponent;
  let fixture: ComponentFixture<FuncationalityCountDownSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncationalityCountDownSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncationalityCountDownSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
