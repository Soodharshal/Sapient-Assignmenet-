import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss']
})
export class CountDownTimerComponent implements OnInit, OnDestroy {

  countInterval: any;
  decrementCount: number = 0;
  pauseCountVal: number = 0;
  pauseCount: number = 0;
  started: number = 0;
  constructor() {

  }
  ngOnDestroy(): void {
    this.clearCountInterval()
  }

  ngOnInit(): void {
  }

  displayCounter(count: string) {
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
  pauseCounter(val: string) {
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
