import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ScannerService {

  constructor(
    private httpClient: HttpClient) {

    }

    getList(){
     return this.httpClient.get('url');

    }

}
