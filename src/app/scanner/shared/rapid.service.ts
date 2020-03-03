import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AssetGroup } from './assetGroup';

@Injectable({
  providedIn: 'root'
})

export class RapidService {
  private rapid;
  private url = environment.rapidBaseUrl;  // URL to web api
  private urlAssetGroup = `${this.url}/api/3/asset_groups`;  // URL to web api

  constructor(private http: HttpClient) { }
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/json',
      // 'Authorization': `Basic ${environment.rapidAuthBasic}`,
    }),
    // insecure: true,
    // withCredentials: true
  };

  getAssetGroups(): Observable<AssetGroup[]> {
    // return this.http.get<any>(`${this.urlAssetGroup}`, this.httpOptions);
    // return this.http.get<any>(`${this.urlAssetGroup}`);
    return this.http.get<any>('assets/data/assetGroups.json')
      .pipe(
        map((result: any) => {
          console.log(result); //<--it's an object
          //result={"_embedded": {"categories": [..]..}
          return result.resources; //just return "resources"
        }),
        // retry(1),
        // catchError(this.handleError)
      )
  }

  getAssetGroupsId(groupId): Observable<any> {
    // return this.http.get<any>(`${this.urlAssetGroup}/${groupId}`);
    return this.http.get<any>('assets/data/assetGroupsId.json')
      .pipe(
        map((result: any) => {
          console.log(result); //<--it's an object
          //result={"_embedded": {"categories": [..]..}
          return result.resources; //just return "resources"
        }),
        // retry(1),
        // catchError(this.handleError)
      )
  }

  getAssetGroupsIdAssets(groupId): Observable<any> {
    // return this.http.get<any>(`${this.urlAssetGroup}/${groupId}/assets`);
    return this.http.get<any>('assets/data/assetGroupsIdassets.json').pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getAssetGroupsIdAssetsId(groupId, assetId): Observable<any> {
    // return this.http.get<any>(`${this.urlAssetGroup}/${groupId}/assets/${assetId}`);
    return this.http.get<any>('assets/data/assetGroupsIdassetsId.json').pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
