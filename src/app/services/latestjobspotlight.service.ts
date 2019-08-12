import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Latestjobspotlight } from './../models/latestjobspotlight.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LatestjobspotlightService {

  constructor(private httpService: HttpClient) {
  }

  public getLatestJobs(): Observable<Latestjobspotlight[]> {
    return this.httpService.get<Latestjobspotlight[]>(`http://localhost:3000/latest_jobs`).pipe(
      map(data => data.map(data => new Latestjobspotlight().deserialize(data)))
    );
  }
  public gettopTools(): Observable<Latestjobspotlight[]> {
    return this.httpService.get<Latestjobspotlight[]>(`http://localhost:3000/top_tools`).pipe(
      map(data => data.map(data => new Latestjobspotlight().deserialize(data)))
    );
  }
}
