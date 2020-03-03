import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'user/', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: '', redirectTo: 'scanner/environments', pathMatch: 'full' },
  { path: '**', redirectTo: 'oops/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // , { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
