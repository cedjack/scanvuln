import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetGroupsListComponent } from './asset-groups-list/asset-groups-list.component';
import { AssetGroupsDetailComponent } from './asset-groups-detail/asset-groups-detail.component';

const routes: Routes = [
  {
    path: 'scanner', children: [
      { path: 'environments/:id', component: AssetGroupsDetailComponent },
      { path: 'environments', component: AssetGroupsListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScannerRoutingModule { }
