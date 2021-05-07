import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepRecordCountDownComponent } from './keep-record-count-down.component';

describe('KeepRecordCountDownComponent', () => {
  let component: KeepRecordCountDownComponent;
  let fixture: ComponentFixture<KeepRecordCountDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeepRecordCountDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepRecordCountDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
