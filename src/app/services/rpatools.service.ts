import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rpatools } from './../models/rpatools.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RpatoolsService {

  constructor(private httpService: HttpClient) {
  }

  public getRpatools(): Observable<Rpatools[]> {
    return this.httpService.get<Rpatools[]>(`http://localhost:3000/rpa_tools`).pipe(
      map(data => data.map(data => new Rpatools().deserialize(data)))
    );
  }
}
