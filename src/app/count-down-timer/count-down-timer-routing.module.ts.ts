import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountDownTimerComponent } from './count-down-timer.component';



const routes: Routes = [
  {
    path: '',
    component: CountDownTimerComponent,
    children: [
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class countDownTimerRoutingModule { }
