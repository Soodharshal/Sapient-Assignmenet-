import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-logs-count-down-timer',
  templateUrl: './logs-count-down-timer.component.html',
  styleUrls: ['./logs-count-down-timer.component.scss']
})
export class LogsCountDownTimerComponent implements OnInit, OnChanges {
  @Input() pauseCount: number = 0;
  @Input() started: number = 0;
  logs: string[] = [];
  storeLog: string = '';
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.pauseCount === 0 && this.started === 0) {
      this.logs = []
    } else {
      if (changes.pauseCount?.currentValue) {
        this.storeLog = `Paused ${this.formatDate(new Date())}`
      }
      if (changes.started?.currentValue) {
        this.storeLog = `Started ${this.formatDate(new Date())}`
      }
      this.logs.push(this.storeLog)
    }
  }
  formatDate(date: Date) {
    var d = new Date(date),
      month = `${''}${(d.getMonth() + 1)}`,
      day = `${''}${d.getDate()}`,
      year = `${''}${d.getFullYear()}`,
      seconds = `${''}${(d.getSeconds() + 1)}`,
      minutes = `${''}${d.getMinutes()}`,
      hour = `${''}${d.getHours()}`;

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return `${[month, day, year].join('-')} ${[hour, minutes, seconds].join("-")} ${(+hour >= 12) ? 'pm' : 'am'}`;
  }

  ngOnInit(): void {
    console.log(this.formatDate(new Date()))
  }

}
