import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/floatingbanner', pathMatch: 'full' },
  {
    path: 'floatingbanner',
    loadChildren: () => import('./floating-banner/floating-banner.module').then(m => m.FloatingBannerModule)
  },

  {
    path: 'e-commerce',
    loadChildren: () => import('./e-commerce/e-commerce.module').then(m => m.ECommerceModule)
  },
  {
    path: 'count-down-timer',
    loadChildren: () => import('./count-down-timer/count-down-timer.module').then(m => m.CountDownTimerModule)
  },
  {
    path: 'count-down-timer-subject',
    loadChildren: () => import('./count-down-timer-subject/count-down-timer-subject.module').then(m => m.CountDownTimerSubjectModule)
  },
  {
    path: 'dynamic-table',
    loadChildren: () => import('./dynamic-table/dynamic-table.module').then(m => m.DynamicTableModule)
  },
  {
    path: 'dynamic-div',
    loadChildren: () => import('./dynamic-div/dynamic-div.module').then(m => m.DynamicDivModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
