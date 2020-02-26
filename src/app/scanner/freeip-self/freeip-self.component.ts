import { Component, OnInit, Inject } from '@angular/core';
import { FreeipService } from '../shared/freeip.service';
import { AlertService } from 'src/app/ui/layout/alert.service';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-freeip-self',
  template: `
    <mat-card class="example-card" *ngIf="ip">
      <mat-card-header [title]="ip['region_name']">
        <mat-card-title>
          <mat-icon>location_on</mat-icon> {{ ip['city'] }}</mat-card-title>
        <mat-card-subtitle >{{ ip['country_name'] }}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>
          ip: {{ ip['ip'] }}
        </p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`

  `]
})
export class FreeipSelfComponent implements OnInit {
  ip;
  constructor(private freeipService: FreeipService, private alert: AlertService, private messageService: MessageService) { }

  ngOnInit(): void {

    if (!this.freeipService.getIpLocation()){
      this.freeipService.getOwnIp().subscribe(
      (result) => {
        console.log('resulat de l ip :', result);
        this.alert.alertMe(`position trouvé : ${result['city']} (${result['country_name']} - ${result['region_name']})`, 'OK');
        this.freeipService.setIpLocation(result);
        this.messageService.add(`position trouvé : ${result['city']} (${result['country_name']} - ${result['region_name']})`);
      },
      (error) => {
        this.alert.alertMe(' position introuvable !', 'J ai compris');
        console.log('HORS Ligne, JSON invalid');
      });
    } else {
      this.ip = this.freeipService.getIpLocation();
        this.messageService.add(`position trouvé en mémoire`);
    }


  }

}
