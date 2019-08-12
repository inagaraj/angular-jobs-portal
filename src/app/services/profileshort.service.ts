import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profileshort } from './../models/profileshort.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileshortService {

  constructor(private httpService: HttpClient) {
  }

  public getJObSeekers(): Observable<Profileshort[]> {
    return this.httpService.get<Profileshort[]>(`http://localhost:3000/get_job_seekers`).pipe(
      map(data => data.map(data => new Profileshort().deserialize(data)))
    );
  }
}
