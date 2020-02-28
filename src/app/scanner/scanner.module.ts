import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module'


import { ScannerRoutingModule } from './scanner-routing.module';
import { HomeComponent } from './home/home.component';
import { FreeipSelfComponent } from './freeip-self/freeip-self.component';
import { HostListComponent } from './host-list/host-list.component';
import { HostDetailComponent } from './host-detail/host-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports: [
    CommonModule,
    ScannerRoutingModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
  ],
  declarations: [
    HomeComponent,
    FreeipSelfComponent,
    HostListComponent,
    HostDetailComponent,
    DashboardComponent
  ],

})
export class ScannerModule { }
