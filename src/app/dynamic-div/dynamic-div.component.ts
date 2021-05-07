import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss']
})
export class DynamicDivComponent implements OnInit {

  arrayNum: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  section: any;
  limit: number = 10;
  numOnScroll: number[] = []
  constructor() { }

  ngOnInit(): void {
    let that = this;
    that.numOnScroll = that.arrayNum.slice(0, that.limit)
    that.section = document.querySelector('#section-1');
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8
    };

    const callback = function (entries: any, observer: any) {
      entries.forEach(function (entry: any) {
        if (entry.isIntersecting && that.limit <= that.arrayNum.length - 1) {
          that.numOnScroll = that.numOnScroll.concat(that.arrayNum.slice(that.limit, that.limit + 10));
          that.limit = that.limit + 10
        }
      }
      )
    }
    const observer = new IntersectionObserver(callback.bind(window), options);
    observer.observe(that.section)
  }
  onClick(data: number) {
    alert(`Button ‘${data}’ is clicked`)
  }
}
