import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Bienvenue sur votr</h1>
    <app-asset-groups-list></app-asset-groups-list>
    <app-freeip-self></app-freeip-self>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
