import { Component, OnInit } from '@angular/core';
import { RapidService } from '../shared/rapid.service';
import { AssetGroup } from '../shared/assetGroup';

@Component({
  selector: 'app-asset-groups-list',
  template: `
    <h3>Liste des environnements</h3>
    <mat-grid-list
      responsive="true"
      [cols] = "cols"
      rowHeight="60"
      gutterSize="6px">
      <mat-grid-tile *ngFor="let assetGroup of assetGroups">
        <a class="grid-list-item mat-body mat-elevation-z2"
          mat-ripple
          (click)="select(assetGroup)">
          <mat-icon>insert_drive_file</mat-icon>
          <!-- <a [routerLink]="['../environment', assetGroup.id ]"> -->
          <a [routerLink]="['../environments', 1]">
            <span class="flex-remain">{{assetGroup?.name}}</span>
          </a>
          <mat-chip-list>
            <mat-chip color="primary">{{assetGroup.vulnerabilities.moderate}}</mat-chip>
            <mat-chip color="warn">{{assetGroup.vulnerabilities.severe}}</mat-chip>
            <mat-chip color="accent">{{assetGroup.vulnerabilities.critical}}</mat-chip>
          </mat-chip-list>
          <button mat-icon-button
            [matMenuTriggerFor]="menu"
            (click)="$event.preventDefault()">
            <mat-icon>more_vert</mat-icon>
          </button>
          <mat-menu #menu="matMenu"
            xPosition="before"
            overlapTrigger="false">
            <button mat-menu-item>
              <mat-icon>dialpad</mat-icon>
              <span>Redial</span>
            </button>
            <button mat-menu-item disabled>
              <mat-icon>voicemail</mat-icon>
              <span>Check voicemail</span>
            </button>
            <button mat-menu-item>
              <mat-icon>notifications_off</mat-icon>
              <span>Disable alerts</span>
            </button>
          </mat-menu>
        </a>
      </mat-grid-tile>
    </mat-grid-list>
    <ng-container *ngIf="!assetGroups">
      <div class="center"><mat-progress-spinner mode="indeterminate"></mat-progress-spinner></div>
    </ng-container>
  `,
  styles: [`
     .content {
      padding: 1em;
    }

    .example-spacer {
      flex: 1 1 auto;
    }

    .grid-list-item {
      display: flex;
      flex-direction: row;
      align-items: center;

      background: #fff;
      text-decoration: none;
      padding: 4px;
      width: calc(100% - 10px);

      &, &:hover {
        color: mat-color($app-primary);
      }

      mat-icon:first-child {
        text-align: center;
        width: 40px;
      }
    }


    .mat-badge-content {
      width: auto;
      display: grid;
      min-width: 32px;
      min-height: 28px;
      text-align: center;
      align-items: center;
      padding: 5px 3px;
      top: -20px;
      right: -22px;
      }
  `]
})
export class AssetGroupsListComponent implements OnInit {
  responsive = true;
  cols = 2;

  assetGroups: AssetGroup[] = [];
  assetGroupSelected: AssetGroup;

  constructor(private rapidService: RapidService) { }

  ngOnInit(): void {
    this.rapidService.getAssetGroups().subscribe((result) => {
      console.log(result);

      this.assetGroups = result
    }, (error) => {
      console.log('Erreur asset group list', error);
    });

  }

  select(assetGroup: AssetGroup) {
    this.assetGroupSelected = assetGroup;
  }

}
