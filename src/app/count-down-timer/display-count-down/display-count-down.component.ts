import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-count-down',
  templateUrl: './display-count-down.component.html',
  styleUrls: ['./display-count-down.component.scss']
})
export class DisplayCountDownComponent implements OnInit, OnChanges {
  @Input() decrementCount: number = 0;
  decrementCounter: number = 0;
  constructor() { }
 
  ngOnChanges(changes: SimpleChanges): void {
    this.decrementCounter = +this.decrementCount;
  }

  ngOnInit(): void {

  }

}
