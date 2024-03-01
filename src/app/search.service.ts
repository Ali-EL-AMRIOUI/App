// search.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiUrl = 'http://localhost:8000/api/search/';

  constructor(private http: HttpClient) {}

  searchItems(searchTerm: string): Observable<string[]> {
    const url = `${this.apiUrl}?item-name=${searchTerm}`;
    return this.http.get<string[]>(url);
  }
}