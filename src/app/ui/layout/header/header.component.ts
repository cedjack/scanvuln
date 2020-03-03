import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header id="header">
      <!-- <div id="logo">
        <img src="assets/logo.png" alt="app" width="60" height="60">
      </div> -->
      <app-menu [isAuthenticated]="isAuthenticated"></app-menu>
    </header>
  `,
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Input() isAuthenticated = true;

}
