import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpService: HttpClient) {
  }
  baseUrl = environment.baseUrl;
  sessionId = environment.sessionid;
  emailId = localStorage.emailId;
  SessionUrl = ';jsessionid=' + this.sessionId;
  emailIdUrl = '?emailId=' + this.emailId;
  httpPostMethod(reqUrl) {
    const Url = this.baseUrl + reqUrl + this.SessionUrl + this.emailIdUrl;
    return this.httpService.post(Url, httpOptions);
  }


  httpPostMethodBody(reqUrl, body) {
    const Url = this.baseUrl + reqUrl + this.SessionUrl + this.emailIdUrl;
    return this.httpService.post(Url, body, httpOptions);
  }
  httpUploadMethod(reqUrl, formdata, params) {
    const Url = this.baseUrl + reqUrl + this.SessionUrl;
    const headers = new HttpHeaders().append('cache-control', 'no-store').append('expires', '0')
      .append('pragma', 'no-cache');
    return this.httpService.post(Url, formdata, {
      headers: headers,
      reportProgress: true,
      params: params
    });
  }
  httpDeleteMethod(reqUrl, deleteUrl) {
    const Url = this.baseUrl + reqUrl + this.SessionUrl + deleteUrl;
    return this.httpService.post(Url, httpOptions);
  }
}
