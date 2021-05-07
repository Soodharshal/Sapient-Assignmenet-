import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsCountDownSubjectComponent } from './logs-count-down-subject.component';

describe('LogsCountDownSubjectComponent', () => {
  let component: LogsCountDownSubjectComponent;
  let fixture: ComponentFixture<LogsCountDownSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsCountDownSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsCountDownSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
