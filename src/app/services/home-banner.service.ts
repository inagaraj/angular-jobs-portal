import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Homebanner } from './../models/homebanner.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeBannerService {

  constructor(private httpService: HttpClient) {
  }

  public getBannerCounts(): Observable<Homebanner[]> {
    return this.httpService.get<Homebanner[]>(`http://localhost:3000/banner_counts`).pipe(
      map(data => data.map(data => new Homebanner().deserialize(data)))
    );
  }
}
