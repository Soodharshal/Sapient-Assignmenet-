import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountDownTimerComponent } from './count-down-timer.component';
import { countDownTimerRoutingModule } from './count-down-timer-routing.module.ts';
import { DisplayCountDownComponent } from './display-count-down/display-count-down.component';
import { FunctionalityCountDownComponent } from './funcationalty-count-down/funcationalty-count-down.component';
import { LogsCountDownTimerComponent } from './logs-count-down-timer/logs-count-down-timer.component';
import { KeepRecordCountDownComponent } from './keep-record-count-down/keep-record-count-down.component';



@NgModule({
  declarations: [
    CountDownTimerComponent,
    DisplayCountDownComponent,
    FunctionalityCountDownComponent,
    LogsCountDownTimerComponent,
    KeepRecordCountDownComponent
  ],
  imports: [
    CommonModule,
    countDownTimerRoutingModule
  ],
  providers:[]
})
export class CountDownTimerModule { }
