import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountDownSubjectService } from '../count-down-subject.service';

@Component({
  selector: 'app-keep-record-count-down-subject',
  templateUrl: './keep-record-count-down-subject.component.html',
  styleUrls: ['./keep-record-count-down-subject.component.scss']
})
export class KeepRecordCountDownSubjectComponent implements OnInit {
  pauseCounter: number = 0
  startedCount: number = 0
  counterStartObservable: any;
  pauseLogObservable: any;
  constructor(private readonly countDownSubjectService: CountDownSubjectService) { }

  ngOnInit(): void {
    this.counterStartObservable = this.countDownSubjectService.startCount.subscribe((startCount) => {
      if (startCount === 'reset') {
        this.startedCount = 0
      } else {
        this.startedCount = +(startCount);
      }
    })
    this.pauseLogObservable = this.countDownSubjectService.pauseCount.subscribe((pauseCount) => {
      if (pauseCount === 'reset') {
        this.pauseCounter = 0
      } else {
        this.pauseCounter = +(pauseCount);
      }
    });
  }

}
