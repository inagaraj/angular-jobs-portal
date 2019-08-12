import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { About } from './../models/about.model';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private httpService: HttpClient) {
  }
  endpoint = 'http://localhost:3000/';

  unsubscribe() {
    throw new Error('Method not implemented.');
  }
  public getAboutus_icons(): Observable<About[]> {
    return this.httpService.post<About[]>( this.endpoint + `about_us`, {data : 'dad'}, ).pipe( );

}
}
