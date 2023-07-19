import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../src/environments/environment.development';
// src/environments/environment.development
@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  getContent(id: string | number): Observable<any> {
    return this.http.get<any>(environment.apiBaseUrl + '/wp/v2/pages/' + id);
  }
}
