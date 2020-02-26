import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-list',
  template: `
    <h2>Liste des hôtes</h2>

    <p class="mat-body">Cols: {{cols}}</p>

    <mat-grid-list
      responsive="true"
      cols = "1"
      rowHeight="60"
      gutterSize="6px">
      <mat-grid-tile *ngFor="let folder of folders">
        <a class="grid-list-item mat-body mat-elevation-z2"
          mat-ripple
          [href]="folder.link">
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

  private folders = [
    { name: 'Folder 1', link: '#1' },
    { name: 'Folder 2', link: '#2' },
    { name: 'Folder 3', link: '#3' },
    { name: 'Folder 4', link: '#4' },
    { name: 'Folder 5', link: '#5' }
  ];

  responsive = true;
  cols = 1;

  constructor() { }

  ngOnInit(): void {
  }
}
