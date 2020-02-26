import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  template: `
    <div *ngIf="messageService.messages.length">
      <h2>Messages
        <button mat-button color="primary" class="clear" (click)="messageService.clear()"><mat-icon>delete</mat-icon></button>
      </h2>

      <div *ngFor='let message of messageService.messages'><span class="card-iten"></span>{{message}} </div>
    </div>
  `,
  styles: []
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
