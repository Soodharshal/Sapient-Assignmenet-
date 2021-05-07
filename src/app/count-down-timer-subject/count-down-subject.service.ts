import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountDownSubjectService {
  counterStart = new BehaviorSubject<string>('');
  pauseCount = new BehaviorSubject<string>('');
  startCount = new BehaviorSubject<string>('');
  startDate = new BehaviorSubject<string>('')
  pauseDate = new BehaviorSubject<string>('');
  pauseLog = new Subject<string>();
  reset = new Subject<string>();
  constructor() { }
}
