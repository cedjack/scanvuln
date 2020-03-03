import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { OopsRoutingModule } from './oops-routing.module';
import { OfflineComponent } from './offline/offline.component';
import { UnavailableComponent } from './unavailable/unavailable.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    OopsRoutingModule,
  ],
  declarations: [
    OfflineComponent,
    UnavailableComponent,
    NotFoundComponent
  ]
})
export class OopsModule { }
