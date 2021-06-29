import { Injectable } from '@angular/core';
import Stat from '../pages/stat/Stat'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatService {
  private url = 'https://stats.naminilamy.fr'
  constructor(
    private http: HttpClient,
  ) {}

  getStats(): Observable<Stat[]> {
    return this.http.get<Stat[]>(this.url)
  }
  deleteStat(stat: Stat) {
    return this.http.delete<Stat>(`${this.url}/${stat.id}`)
  }
}
