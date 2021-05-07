import { Component, OnInit } from '@angular/core';
import { CountDownSubjectService } from './count-down-subject.service';

@Component({
  selector: 'app-count-down-timer-subject',
  templateUrl: './count-down-timer-subject.component.html',
  styleUrls: ['./count-down-timer-subject.component.scss']
})
export class CountDownTimerSubjectComponent implements OnInit {

  countInterval: any;
  decrementCount: number = 0;
  pauseCountVal: number = 0;
  pauseCount: number = 0;
  started: number = 0;
  constructor(private readonly countDownSubjectService: CountDownSubjectService) {


  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.clearCountInterval()
  }


  displayCounter(count: any) {
    if (count === 'reset') {
      this.started = 0;
      this.decrementCount = 0
      this.clearCountInterval()
    } else {
      this.started++;
      this.decrementCount = +count;
      this.countInterval = setInterval(() => {
        this.decrementCount--;
        if (this.decrementCount < 1) {
          this.decrementCount = 0
          this.clearCountInterval()
        }
      }, +count * 100);

    }
  }
  pauseCounter(val: any) {
    if (val === 'reset') {
      this.pauseCountVal = 0;
      this.pauseCount = 0;
    } else {
      this.pauseCountVal = this.decrementCount;
      this.pauseCount++;
    }
  }
  clearCountInterval() {
    clearInterval(this.countInterval);
  }
}
