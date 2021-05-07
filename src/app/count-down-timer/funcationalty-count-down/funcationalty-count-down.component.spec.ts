import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalityCountDownComponent } from './funcationalty-count-down.component';

describe('FunctionalityCountDownComponent', () => {
  let component: FunctionalityCountDownComponent;
  let fixture: ComponentFixture<FunctionalityCountDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalityCountDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalityCountDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
