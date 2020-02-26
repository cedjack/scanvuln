import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module'


import { ScannerRoutingModule } from './scanner-routing.module';
import { HomeComponent } from './home/home.component';
import { FreeipSelfComponent } from './freeip-self/freeip-self.component';
import { HostListComponent } from './host-list/host-list.component';
import { HostDetailComponent } from './host-detail/host-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ScannerRoutingModule,
    MaterialModule,
  ],
  declarations: [
    HomeComponent,
    FreeipSelfComponent,
    HostListComponent,
    HostDetailComponent
  ],

})
export class ScannerModule { }
