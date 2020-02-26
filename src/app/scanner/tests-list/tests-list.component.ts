import { Component, OnInit, Input } from '@angular/core';
import { ConfigFreeipService } from 'src/app/config/config-freeip.service';
import { ConfigFreeip } from 'src/app/config/config-freeip';

@Component({
  selector: 'app-tests-list',
  template: `
    <p>tests-list works!</p>
    <ng-container *ngIf="config; else elseTemplate1">
      freeip: {{ config.hostname }}
    </ng-container>
    <ng-template #elseTemplate1>
      aucune config freeip
    </ng-template>
    <hr>
    <ng-container *ngIf="ip; else elseTemplate2">
    <br>ip: {{ ip['ip'] }}
      <br>pays: {{ ip['country_name'] }}
      <br>ville: {{ ip['city'] }}
    </ng-container>
    <ng-template #elseTemplate2>
      aucnue ip renvoyée
    </ng-template>

  `,
  styles: []
})
export class TestsListComponent implements OnInit {
  @Input() config: ConfigFreeip;
  @Input() ip;

  constructor(
    private configFreeipService: ConfigFreeipService,
  ) { }

  ngOnInit(): void {
    this.configFreeipService.getConfig().subscribe(
      (result) => {
        this.config = result;
      },
      (error) => {
        console.log('HORS Ligne, JSON invalid');
      });

    this.configFreeipService.getOwnIp().subscribe(
      (result) => {
        console.log('resulat de l ip :', result);

        this.ip = result;
      },
      (error) => {
        console.log('HORS Ligne, JSON invalid');
      });

  }

}
