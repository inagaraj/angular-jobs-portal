import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobShort } from './../models/job-short.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobShortService {

  constructor(private httpService: HttpClient) {
  }

  public getShortJobs(): Observable<JobShort[]> {
    return this.httpService.get<JobShort[]>(`http://localhost:3000/short_jobs`).pipe(
      map(data => data.map(data => new JobShort().deserialize(data)))
    );
  }
}
