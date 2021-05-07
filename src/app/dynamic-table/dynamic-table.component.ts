import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { DynamicTableService } from './dynamic-table.service';
import { table } from './table';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  tabItems: table[] = [];
  tableKeys: string[] = []
  firstName: string = '';
  standard: string = '';
  section: string = '';
  sortType: boolean = false
  sub1: string = '';
  sub2: string = '';
  sortProp: string = '';
  sub3: string = ''
  constructor(private readonly route: ActivatedRoute) {

  }
  sortByProperty(data: string, sortType: boolean) {
    return (obj1: any, obj2: any) => {
      if ((sortType ? obj1[data] : obj2[data]) < (sortType ? obj2[data] : obj1[data])) {
        return -1;
      }
      if ((sortType ? obj1[data] : obj2[data]) < (sortType ? obj2[data] : obj1[data])) {
        return 1;
      }
      return 0;
    }
  }
  sort(data: string) {
    this.sortType = !this.sortType;
    this.tabItems.sort(this.sortByProperty(data, this.sortType))
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => this.tabItems = data['dynamicTable']);
    [this.firstName, this.standard, this.section, this.sub1, this.sub2, this.sub3] = Object.keys(this.tabItems[0]);
  }

}
