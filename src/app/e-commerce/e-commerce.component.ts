import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ECommerceService } from './e-commerce.service';
import { Items } from './items'
import { sort } from './sort';
@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss']
})
export class ECommerceComponent implements OnInit {
  filterArray: sort[] = [];
  ItemDetails: Items[] = [];
  isGridView: boolean = false;
  sortByField: string = "";
  viewType: string = ""
  constructor(private readonly router: Router,
    private readonly eCommerceService: ECommerceService) {
  }

  ngOnInit(): void {
    let routes = this.router.url.split("/");
    let activeRoute = routes[routes.length - 1]
    this.checkView(activeRoute);
    this.initStaticData();
    this.getCartDetails();
  }
  checkView(data: string) {
    if (data === 'grid') {
      this.isGridView = true;
    } else {
      this.isGridView = false;
    }
    this.viewType = data;
  }
  initStaticData() {
    this.filterArray = [
      { value: "Low to High", code: "LTH" },
      { value: "High to Low", code: "HTL" }
    ]
  }
  getCartDetails() {
    this.eCommerceService.getItems().subscribe((data: Items[]) => this.ItemDetails = data);
  }
  sortingBy(event: any) {
    this.sortByField = event.target.value;
  }
  sortBy(arg: string) {
    this.checkView(arg);
  }
}
