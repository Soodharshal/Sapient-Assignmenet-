import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CountDownSubjectService } from '../count-down-subject.service';

@Component({
  selector: 'app-display-count-down-subject',
  templateUrl: './display-count-down-subject.component.html',
  styleUrls: ['./display-count-down-subject.component.scss']
})
export class DisplayCountDownSubjectComponent implements OnInit, OnChanges, OnDestroy {

  countInterval: any;
  decrementCount: number = 0;
  pauseCountVal: number = 0;
  pauseCount: number = 0;
  started: number = 0;
  constructor(private readonly countDownSubjectService: CountDownSubjectService) { }
  ngOnDestroy(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  displayCounter(count: any) {
    if (count === 'reset') {
      this.clearCountInterval()
    } else {
      this.decrementCount = +count;
      this.countInterval = setInterval(() => {
        this.decrementCount--
        this.countDownSubjectService.pauseLog.next(String(this.decrementCount));
        if (this.decrementCount < 1) {
          this.decrementCount = 0
          this.clearCountInterval()
        }
      }, +count * 100);

    }
  }
  clearCountInterval() {
    this.decrementCount = 0
    clearInterval(this.countInterval);
  }
  ngOnInit(): void {
    this.countDownSubjectService.counterStart.subscribe((decrementCount: string) => {
      this.displayCounter(decrementCount)
    })
  }

}
