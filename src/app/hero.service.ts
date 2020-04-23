import { Hero } from './heroes/Hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  url = 'https://rickandmortyapi.com/api/character/1,2,3,5,7,9,11,200';
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    // return of(HEROES);
    return this.http.get<Hero[]>(this.url);
  }

  getFavoriteHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.url);
  }

  getHero(id): Observable<Hero> {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    return this.http.get<Hero>(url);
  }
}
