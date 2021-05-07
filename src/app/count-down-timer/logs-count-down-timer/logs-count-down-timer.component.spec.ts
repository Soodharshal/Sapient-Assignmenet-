import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsCountDownTimerComponent } from './logs-count-down-timer.component';

describe('LogsCountDownTimerComponent', () => {
  let component: LogsCountDownTimerComponent;
  let fixture: ComponentFixture<LogsCountDownTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsCountDownTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsCountDownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
