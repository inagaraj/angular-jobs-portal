import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, pipe, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import decode from 'jwt-decode';

import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import { LoginProcess } from '../models/login-process.model';
import { environment } from '../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
};
const headers = new HttpHeaders()
  .append('Access-Control-Allow-Headers', 'Content-Type')
  .append('Access-Control-Allow-Methods', 'GET')
  .append('Access-Control-Allow-Origin', '*')
  .append('Content-Type', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private message: string;

  constructor(private _router: Router, private httpService: HttpClient) { }
  baseUrl = environment.baseUrl;
  /**
   * this is used to clear anything that needs to be removed
   */
  clear(): void {
    localStorage.clear();
  }

  /**
   * check for expiration and if token is still existing or not
   * @return {boolean}
   */
  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this.isTokenExpired();
  }

  // simulate jwt token is valid
  // https://github.com/theo4u/angular4-auth/blob/master/src/app/helpers/jwt-helper.ts
  isTokenExpired(): boolean {
    return false;
  }

  loginAdmin(): void {
    // tslint:disable-next-line: max-line-length
    localStorage.setItem('token', `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMyNzM5NjksImV4cCI6MTU2NDgxMDAwNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJyb2xlIjoiQWRtaW4ifQ.rEkg53_IeCLzGHlmaHTEO8KF5BNfl6NEJ8w-VEq2PkE`);

    this._router.navigate(['/profile']);
  }

  login(data): Observable<LoginProcess> {
    console.log(data);
    // tslint:disable-next-line: max-line-length
    //window.location.href = '/';
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Cache-Control', 'no-cache');
    let options = {
      headers: httpHeaders
    };
    const body = JSON.stringify(data);
    //const res = this.httpService.get<LoginProcess>('http://localhost:8888/canditatelogin?emailId=' + emailId + '&password=' +password);
    return this.httpService.post<LoginProcess>(this.baseUrl + 'canditatelogin', body, options);
  }

  signupSeeker(data): Observable<any> {
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Cache-Control', 'no-cache');
    let options = {
      headers: httpHeaders
    };
    const body = JSON.stringify(data);
    const emailId = data.emailId;
    const password = data.password;
    // const res = this.httpService.get<LoginProcess>('http://localhost:8888/canditatelogin?emailId=' + emailId + '&password=' +password);
    return this.httpService.post<LoginProcess>(this.baseUrl + 'canditateSignup', body, options);
  }

  validateOtp(data, otpNumber): Observable<String> {
    return this.httpService.get<String>(this.baseUrl + 'validateOtp?otpnum=' + otpNumber + '&emailId=' + data);
  }

  /**
   * this is used to clear local storage and also the route to login
   */
  logout(): void {
    this.clear();
    localStorage.loggedIn = false;
    localStorage.role = '';
    window.location.href = '/';
    // this._router.navigate(['/']);
  }

  decode() {
    return localStorage.role;
  }
}
