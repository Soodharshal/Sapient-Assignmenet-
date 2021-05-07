import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CountDownSubjectService } from '../count-down-subject.service';

@Component({
  selector: 'app-funcationality-count-down-subject',
  templateUrl: './funcationality-count-down-subject.component.html',
  styleUrls: ['./funcationality-count-down-subject.component.scss']
})
export class FuncationalityCountDownSubjectComponent implements OnInit, OnChanges {
  count: number = 0
  startCount: number = 0
  @ViewChild('timeLimit') timeLimit!: ElementRef;
  pauseObservable: any;
  counterType: string[] = [];

  pauseCounterArray: number[] = [];
  constructor(private readonly countDownServiceSubject: CountDownSubjectService) {

  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  resetCounter() {
    this.timeLimit.nativeElement.value = ''
    this.pauseCounterArray = [];
    this.countDownServiceSubject.counterStart.next('reset')
    this.countDownServiceSubject.pauseCount.next('reset')
    this.countDownServiceSubject.startCount.next('reset')
    this.countDownServiceSubject.startDate.next('reset')
    this.countDownServiceSubject.pauseDate.next('reset')
  }

  startCounter() {
    if (this.timeLimit.nativeElement.value) {
      this.countDownServiceSubject.counterStart.next(this.timeLimit.nativeElement.value);
      this.countDownServiceSubject.startCount.next(String(++this.startCount))
    }
    this.countDownServiceSubject.startDate.next(String(new Date()))
  }

  pauseCounter(pause: string) {
    this.pauseObservable = this.countDownServiceSubject.pauseLog.subscribe((log: any) => {
      if (log > 0) {
        this.pauseCounterArray.push(log)
        this.countDownServiceSubject.pauseDate.next(String(new Date()))
        this.pauseObservable.unsubscribe()
      }
    })
    this.countDownServiceSubject.pauseCount.next(String(++this.count))


  }
  ngOnInit(): void {
  }


}

