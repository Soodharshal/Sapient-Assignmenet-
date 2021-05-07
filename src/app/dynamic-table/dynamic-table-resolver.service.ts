import { Injectable } from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { DynamicTableService } from './dynamic-table.service';
import { table } from './table';



@Injectable({ providedIn: 'root' })
export class DynamicTableResolverService implements Resolve<table[]> {
    constructor(
        private dynamicTableService: DynamicTableService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dynamicTableService.getTableData();
    }
}
