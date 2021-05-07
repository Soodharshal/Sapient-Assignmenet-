import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountDownTimerSubjectComponent } from './count-down-timer-subject.component';
import { DisplayCountDownSubjectComponent } from './display-count-down-subject/display-count-down-subject.component';
import { FuncationalityCountDownSubjectComponent } from './funcationality-count-down-subject/funcationality-count-down-subject.component';
import { LogsCountDownSubjectComponent } from './logs-count-down-subject/logs-count-down-subject.component';
import { KeepRecordCountDownSubjectComponent } from './keep-record-count-down-subject/keep-record-count-down-subject.component';
import { countDownTimerSubjectRoutingModule } from './count-down-timer-subject-routing.module';



@NgModule({
  declarations: [CountDownTimerSubjectComponent, DisplayCountDownSubjectComponent, FuncationalityCountDownSubjectComponent, LogsCountDownSubjectComponent, KeepRecordCountDownSubjectComponent],
  imports: [
    CommonModule,
    countDownTimerSubjectRoutingModule
  ]
})
export class CountDownTimerSubjectModule { }
