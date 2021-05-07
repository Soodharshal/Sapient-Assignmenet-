import { NgModule } from '@angular/core';
import { ECommerceService } from '../e-commerce/e-commerce.service';
import { DynamicTableResolverService } from '../dynamic-table/dynamic-table-resolver.service';
import { CountDownSubjectService } from '../count-down-timer-subject/count-down-subject.service';



@NgModule({
  providers: [ECommerceService,DynamicTableResolverService,CountDownSubjectService]
})
export class CoreModule { }
