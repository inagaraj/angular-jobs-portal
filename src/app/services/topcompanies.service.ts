import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topcompanies } from './../models/topcompanies.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopcompaniesService {

  constructor(private httpService: HttpClient) {
  }

  public getTopCompanies(): Observable<Topcompanies[]> {
    return this.httpService.get<Topcompanies[]>(`http://localhost:3000/top_companies`).pipe(
      map(data => data.map(data => new Topcompanies().deserialize(data)))
    );
  }
}
