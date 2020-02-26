import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FreeipService {
  private ip;
  private url = 'https://freegeoip.app/json/';  // URL to web api

  httpOption = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {}

  setIpLocation(ip){
    this.ip = ip;
  }

  getIpLocation(){
    return this.ip ? this.ip : false ;
  }

  getOwnIp() {
    return this.http.get<any>(this.url);
  }

  getIpDetail(ip) {
    return this.http.get<any>(`this.url${ip}`);
  }
}
