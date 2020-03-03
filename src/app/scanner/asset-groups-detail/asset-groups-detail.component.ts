import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-groups-detail',
  template: `
    <h1>Détail de l'environnement</h1>

    <div class="main-div">
      <mat-card class="example-card" layout="row" layout-align="center center">
        <mat-card-header>
          <div class="login-box-header" layout="row" layout-align="center center">
              <img src="https://image.ibb.co/hDqa3p/codershood.png">
          </div>
        </mat-card-header>
        <mat-card-content>
          <form class="example-form">
            <table class="example-full-width" cellspacing="0">
              <tr>
                <td>
                  <mat-form-field class="example-full-width">
                  <input matInput placeholder="Username" name="username" required>
                  </mat-form-field>
                </td>
              </tr>
              <tr>
              <td><mat-form-field class="example-full-width">
                <input matInput placeholder="Password"  type="password" name="password" required>
              </mat-form-field></td>
            </tr></table>
          </form>
          <mat-spinner [style.display]="showSpinner ? 'block' : 'none'"></mat-spinner>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="primary">Login</button>
        </mat-card-actions>
      </mat-card>
    </div>


  `,
  styles: [`
    .main-div{
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

  `]
})
export class AssetGroupsDetailComponent implements OnInit {

  showSpinner: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
