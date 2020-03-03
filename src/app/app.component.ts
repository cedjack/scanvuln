import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-header [isAuthenticated]="true" ></app-header>
      <!-- <app-header [isAuthenticated]="true" ></app-header> -->
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scanvuln';
}
