import { Component, OnInit, Inject } from '@angular/core';
import { FreeipService } from '../shared/freeip.service';
import { AlertService } from 'src/app/ui/layout/alert.service';
import { Freeip } from '../shared/freeip';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-freeip-self',
  template: `
    <ng-container *ngIf="freeip">
      <mat-card class="example-card">
        <mat-card-header [title]="freeip.region_name">
          <mat-card-title>
            <mat-icon>location_on</mat-icon> {{ freeip.city }}
          </mat-card-title>
          <mat-card-subtitle>{{ freeip.country_name }}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>ip: {{ freeip.ip }}</p>
        </mat-card-content>
      </mat-card>
    </ng-container>
    <ng-container *ngIf="!freeip">
      <div class="center"><mat-progress-spinner mode="indeterminate"></mat-progress-spinner></div>
    </ng-container>
    <ng-container *ngFor="let error of errors">
      <div class="center">{{ error }}</div>
    </ng-container>
  `,
  styles: [

  ]
})
export class FreeipSelfComponent implements OnInit {
  freeip: Freeip;
  errors: string[] = [];

  constructor(
    private freeipService: FreeipService,
    private alert: AlertService,
    private snackBar: MatSnackBar,
  ) {
    this.freeip = undefined;
  }

  ngOnInit(): void {
    this.locateMe()
  }

  locateMe(): void {
    // on charge l ip seulement si besoin
    if (!this.freeipService.isLoaded()) {
      const loading = this.snackBar.open(`Localisation en cours ...`);
      this.freeipService.getOwnIp().subscribe((freeip) => {
        this.freeipService.register(freeip);
        this.freeip = freeip;
        this.alert.alertMe(`position trouvé : ${freeip.city} (${freeip.country_name} - ${freeip.region_name})`, 'OK');
      }, () => {
        this.errors = [`Pas de connexion Internet`];
        this.alert.alertMe(' position introuvable !', 'J ai compris');
        console.log('HORS Ligne, JSON invalid');
      }, () => {
        loading.dismiss();
      });
    } else {
      this.freeip = this.freeipService.get();
    }
  }

}
