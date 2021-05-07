import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepRecordCountDownSubjectComponent } from './keep-record-count-down-subject.component';

describe('KeepRecordCountDownSubjectComponent', () => {
  let component: KeepRecordCountDownSubjectComponent;
  let fixture: ComponentFixture<KeepRecordCountDownSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeepRecordCountDownSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepRecordCountDownSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
