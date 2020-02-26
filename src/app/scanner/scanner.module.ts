import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScannerRoutingModule } from './scanner-routing.module';
import { TestsListComponent } from './tests-list/tests-list.component';


@NgModule({
  declarations: [TestsListComponent],
  imports: [
    CommonModule,
    ScannerRoutingModule
  ]
})
export class ScannerModule { }
