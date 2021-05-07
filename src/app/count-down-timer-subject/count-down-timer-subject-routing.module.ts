import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountDownTimerSubjectComponent } from './count-down-timer-subject.component';
import { DisplayCountDownSubjectComponent } from './display-count-down-subject/display-count-down-subject.component';
import { FuncationalityCountDownSubjectComponent } from './funcationality-count-down-subject/funcationality-count-down-subject.component';
import { KeepRecordCountDownSubjectComponent } from './keep-record-count-down-subject/keep-record-count-down-subject.component';
import { LogsCountDownSubjectComponent } from './logs-count-down-subject/logs-count-down-subject.component';

const routes: Routes = [
  {
    path: '',
    component: CountDownTimerSubjectComponent,
    children: [
      { path: 'display', component: DisplayCountDownSubjectComponent },
      { path: 'function', component: FuncationalityCountDownSubjectComponent },
      { path: 'logs', component: LogsCountDownSubjectComponent },
      { path: 'keep-record', component: KeepRecordCountDownSubjectComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class countDownTimerSubjectRoutingModule { }
