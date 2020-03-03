import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <mat-toolbar color="primary">
      <a routerLink="/" routerLinkActive="nav-active">
        <mat-icon>home</mat-icon>
        <ng-container i18n="menu movies|Menu item for movies@@menuMovies">Accueil</ng-container>
      </a>
      <!-- <a routerLink="/" routerLinkActive="nav-active">
        <mat-icon>list</mat-icon>
        <ng-container i18n="menu movies|Menu item for movies@@menuMovies">Hôtes</ng-container>
      </a>
      <a routerLink="/" routerLinkActive="nav-active">
        <mat-icon>cached</mat-icon>
        <ng-container i18n="menu movies|Menu item for movies@@menuMovies">Rafraichir</ng-container>
      </a> -->
      <!-- <a *ngIf="isAuthenticated" routerLink="/account/profile" routerLinkActive="nav-active">
        <mat-icon>event</mat-icon>
        <ng-container i18n="menu reservations|Menu item for reservations@@menuReservations">Mes résas</ng-container>
      </a> -->
      <a *ngIf="!isAuthenticated" routerLink="/account/login" routerLinkActive="nav-active">
        <mat-icon>account_circle</mat-icon>
        <ng-container i18n="menu account|Menu item for account@@menuAccount">Compte</ng-container>
      </a>
    </mat-toolbar>
  `,
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

  @Input() isAuthenticated = false;

}
