import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Freeip } from './freeip';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreeipService {
  private freeip: Freeip;
  private url = 'https://freegeoip.app/json/';  // URL to web api

  httpOption = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {  }

  isLoaded() {
    return this.freeip ? true : false;
  }

  get(): Freeip {
    return this.freeip;
  }

  register(freeip: Freeip): void {
    this.freeip = freeip;
  }

  getOwnIp(): Observable<Freeip> {
    return this.http.get<Freeip>(this.url);
  }

  getIpDetail(ip): Observable<Freeip> {
    return this.http.get<Freeip>(`this.url${ip}`);
  }
}
