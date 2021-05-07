import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DynamicDivComponent } from './dynamic-div.component';



@NgModule({
  declarations: [
    DynamicDivComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DynamicDivComponent }])
  ]
})
export class DynamicDivModule { }
