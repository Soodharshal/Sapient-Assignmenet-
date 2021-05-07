import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-keep-record-count-down',
  templateUrl: './keep-record-count-down.component.html',
  styleUrls: ['./keep-record-count-down.component.scss']
})
export class KeepRecordCountDownComponent implements OnInit {
  @Input() pauseCount: number = 0;
  @Input() started: number = 0;
  constructor() { }

  ngOnInit(): void {
  
  }

}
