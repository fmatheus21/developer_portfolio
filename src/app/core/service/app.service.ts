import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  findAbout(): Observable<any[]> {
    var about = './assets/about.json';
    return this.http.get<any[]>(about);
  }

  findPortfolio(): Observable<any[]> {
    var portfolio = './assets/portfolio.json';
    return this.http.get<any[]>(portfolio);
  }

  findService(): Observable<any[]> {
    var service = './assets/service.json';
    return this.http.get<any[]>(service);
  }

  findPresentation(): Observable<any[]> {
    var presentation = './assets/presentation.json';
    return this.http.get<any[]>(presentation);
  }
}
