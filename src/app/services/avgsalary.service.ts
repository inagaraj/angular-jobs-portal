import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avgsalary } from './../models/avgsalary.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AvgsalaryService {

  constructor(private httpService: HttpClient) {
  }

  public getAvgsalary(): Observable<Avgsalary[]> {
    return this.httpService.get<Avgsalary[]>(`http://localhost:3000/avg_salary`).pipe(
      map(data => data.map(data => new Avgsalary().deserialize(data)))
    );
  }
}
