import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jobsearch } from './../models/jobsearch.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobsearchService {

  constructor(private httpService: HttpClient) {
  }

  public getTools(): Observable<Jobsearch[]> {
    return this.httpService.get<Jobsearch[]>(`http://localhost:3000/get_tools`).pipe(
      map(data => data.map(data => new Jobsearch().deserialize(data)))
    );
  }
}
