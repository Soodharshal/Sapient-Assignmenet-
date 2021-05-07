import { Component, OnInit } from '@angular/core';
import { CountDownSubjectService } from '../count-down-subject.service';

@Component({
  selector: 'app-logs-count-down-subject',
  templateUrl: './logs-count-down-subject.component.html',
  styleUrls: ['./logs-count-down-subject.component.scss']
})
export class LogsCountDownSubjectComponent implements OnInit {
  counterStartObservable: any;
  pauseLogObservable: any;
  storeLog: string = '';
  logs: string[] = [];
  constructor(private readonly countDownSubjectService: CountDownSubjectService) { }

  ngOnInit(): void {
    this.countDownSubjectService.startDate.subscribe((data: any) => {
      if (data === 'reset') {
        this.logs = []
      } else {
        if (data)
          this.logs.push(`Started ${this.formatDate(data)}`);
      }
    })
    this.countDownSubjectService.pauseDate.subscribe((data: any) => {

      if (data === 'reset') {
        this.logs = []
      } else {
        if (data)
          this.logs.push(`Paused ${this.formatDate(data)}`);
      }
    });
    this.logs.push(this.storeLog)
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
}
