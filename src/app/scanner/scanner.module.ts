import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { ScannerRoutingModule } from './scanner-routing.module';
import { HomeComponent } from './home/home.component';
import { AssetGroupsListComponent } from './asset-groups-list/asset-groups-list.component';
import { AssetGroupsDetailComponent } from './asset-groups-detail/asset-groups-detail.component';
import { FreeipSelfComponent } from './freeip-self/freeip-self.component';
import { HostListComponent } from './host-list/host-list.component';
import { HostDetailComponent } from './host-detail/host-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ScannerRoutingModule,
  ],
  declarations: [
    HomeComponent,
    AssetGroupsListComponent,
    AssetGroupsDetailComponent,
    FreeipSelfComponent,
    HostListComponent,
    HostDetailComponent,
  ],

})
export class ScannerModule { }
