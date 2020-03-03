import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // readonly tokenKey = 'access_token';
  token: string | null;

  isAuthenticated = new ReplaySubject<boolean>(1);


  constructor() {
    //   this.token = localStorage.getItem(this.tokenKey);

    //   this.isAuthenticated.next(this.token ? true : false);

    this.token = environment.rapidAuthBasic;
    this.isAuthenticated.next(true);
  }

  // login(token: string) {
  //   this.isAuthenticated.next(true);

  //   this.token = token;

  //   localStorage.setItem(`access_token`, token);
  // }

  // logout() {
  //   this.isAuthenticated.next(false);

  //   this.token = null;

  //   localStorage.removeItem(`access_token`);
  // }
}
