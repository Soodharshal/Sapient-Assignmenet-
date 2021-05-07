import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { eCommerceRoutingModule } from './e-commerce-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ECommerceComponent } from './e-commerce.component';



@NgModule({
  declarations: [
    ECommerceComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    eCommerceRoutingModule
  ]
})
export class ECommerceModule { }
