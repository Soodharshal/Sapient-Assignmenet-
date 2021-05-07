import { TestBed } from '@angular/core/testing';

import { CountDownSubjectService } from './count-down-subject.service';

describe('CountDownSubjectService', () => {
  let service: CountDownSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountDownSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
