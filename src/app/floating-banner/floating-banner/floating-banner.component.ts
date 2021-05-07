import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { divAlign } from '../divAlign';

@Component({
  selector: 'app-floating-banner',
  templateUrl: './floating-banner.component.html',
  styleUrls: ['./floating-banner.component.scss'],
  animations: [
    trigger('rotateText', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('1000ms ease-out')),
      transition('default => rotated', animate('1000ms ease-in'))
    ])
  ]
})
export class FloatingBannerComponent implements OnInit {
  state: string = 'default';
  divSize: divAlign[] = [
    { "width": 50, "height": 30, "top": 1, "left": 1, "right": 1, "isChildDiv": false },
    { "width": 47, "height": 27, "top": 2.5, "left": 1, "right": 1, "isChildDiv": false },
    { "width": 44, "height": 24, "top": 4, "left": 1, "right": 1, "isChildDiv": false },
    { "width": 41, "height": 21, "top": 5.5, "left": 1, "right": 1, "isChildDiv": false },
    { "width": 38, "height": 18, "top": 7, "left": 1, "right": 1, "isChildDiv": false },
    { "width": 35, "height": 15, "top": 8.5, "left": 1, "right": 1, "isChildDiv": false },
    { "width": 32, "height": 12, "top": 10, "left": 1, "right": 1, "isChildDiv": false },
    { "width": 29, "height": 9, "top": 11.5, "left": 1, "right": 1, "isChildDiv": true },
  ]
  constructor() {

  }

  setMyDiv(index: number) {
    let styles = {
      'height': `${this.divSize[index].height}rem`,
      'width': `${this.divSize[index].width}rem`,
      'position': 'absolute',
      'top': `${this.divSize[index].top}rem`,
      'left': `${this.divSize[index].left}rem`,
      'right': `${this.divSize[index].right}rem`
    };
    return styles;
  }

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }
  ngOnInit(): void {
    this.rotate()
  }


}
