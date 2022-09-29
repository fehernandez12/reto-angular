import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL } from '../constants/constants';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private header: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  async findAll(): Promise<Hero[]> {
    const response = await fetch(`${API_URL}/all.json`);
    const data: Hero[] = await response.json();
    return data;
  }

  findById(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${API_URL}/id/${id}.json`);
  }
}
