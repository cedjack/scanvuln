import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-list',
  template: `
    <h2>Liste des hôtes</h2>

    <mat-grid-list
      responsive="true"
      [cols] = "cols"
      rowHeight="60"
      gutterSize="6px">
      <mat-grid-tile *ngFor="let folder of folders">
        <a class="grid-list-item mat-body mat-elevation-z2"
          mat-ripple
          routerLink="">
          <mat-icon>insert_drive_file</mat-icon>
          <span class="flex-remain">{{folder.name}}</span>
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

    <mat-divider></mat-divider>
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
  `]
})
export class HostListComponent implements OnInit {

  folders = [
    { name: 'Hôtes 1', id: 1 },
    { name: 'Hôtes 2', id: 2 },
    { name: 'Hôtes 3', id: 3 },
    { name: 'Hôtes 4', id: 4 },
    { name: 'Hôtes 5', id: 5 },
    { name: 'Hôtes 6', id: 6 }
  ];

  responsive = true;
  cols = 3;

  constructor() { }

  ngOnInit(): void {
  }
}
