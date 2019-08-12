import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aboutspecial } from './../models/aboutspecial.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AboutspecialService {

  constructor(private httpService: HttpClient) {
  }

  public getabout_special(): Observable<Aboutspecial[]> {
    return this.httpService.get<Aboutspecial[]>(`http://localhost:3000/about_special`).pipe(
      map(data => data.map(data => new Aboutspecial().deserialize(data)))
    );
  }
}
