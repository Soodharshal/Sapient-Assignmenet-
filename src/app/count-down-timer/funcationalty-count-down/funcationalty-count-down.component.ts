import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-functionality-count-down',
  templateUrl: './functionality-count-down.component.html',
  styleUrls: ['./functionality-count-down.component.scss']
})
export class FunctionalityCountDownComponent implements OnInit, OnChanges {
  @ViewChild('timeLimit') timeLimit!: ElementRef;
  @Input() pauseCountVal: number = 0;
  @Output() valueChange = new EventEmitter<string>();
  @Output() pauseCount = new EventEmitter<string>();
  @Output() reset = new EventEmitter<string>();
  pauseCounterArray: number[] = [];
  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.pauseCountVal !== 0)
      this.pauseCounterArray.push(this.pauseCountVal);
  }

  resetCounter() {
    this.timeLimit.nativeElement.value = ''
    this.pauseCounterArray = [];
    this.valueChange.emit('reset')
    this.pauseCount.emit('reset')
  }

  startCounter() {
    if (this.timeLimit.nativeElement.value) {
      this.valueChange.emit(this.timeLimit.nativeElement.value)
    }
  }

  pauseCounter() {
    this.pauseCount.emit()
  }
  ngOnInit(): void {
  }

}
