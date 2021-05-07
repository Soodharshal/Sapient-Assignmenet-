import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ECommerceService {
  jsonPath:string = './assets/cart-Items.json';
  constructor(private readonly httpClient:HttpClient) { }
  getItems(){
    return this.httpClient.get<Items[]>(this.jsonPath);
  }
}
