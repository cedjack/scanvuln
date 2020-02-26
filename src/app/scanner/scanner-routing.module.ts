import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HostListComponent } from './host-list/host-list.component';
import { HostDetailComponent } from './host-detail/host-detail.component';

const routes: Routes = [
  {
    path: 'scanner', children: [
      { path: 'home', component: HomeComponent },
      { path: 'hosts', component: HostListComponent },
      { path: 'hosts/:hostId', component: HostDetailComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScannerRoutingModule { }
