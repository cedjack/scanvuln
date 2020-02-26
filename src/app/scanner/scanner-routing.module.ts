import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestsListComponent } from './tests-list/tests-list.component';

const routes: Routes = [
  {
    path: 'scan', children: [
      { path: 'test', component: TestsListComponent },
      { path: 'index', component: TestsListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScannerRoutingModule { }
