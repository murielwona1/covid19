import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiUrl = `${environment.url}`;

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(public http: HttpClient) { }

  getAllData(route: string) {
    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + route)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAllDataLimit(route: string, key: any, type: any) {
    return new Promise((resolve, reject) => {
      const url = apiUrl + route + '/' + key + '/' + type;
      this.http.get(url)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
