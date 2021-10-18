import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thema } from './thema';

@Injectable({
  providedIn: 'root'
})
export class ThemaService {

  constructor(private httpClient: HttpClient) { }

  getThemas(): Observable<Thema[]> {
    return this.httpClient.get<Thema[]>("http://localhost:3000/themas");
  }
  
  getThemaById(id: number): Observable<Thema> {
    return this.httpClient.get<Thema>("http://localhost:3000/themas/" + id);
  }

  postThema(thema: Thema): Observable<Thema> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Thema>("http://localhost:3000/themas", thema, {headers: headers});
  }

  putThema(id:number, thema: Thema): Observable<Thema> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Thema>("http://localhost:3000/themas/" + id, thema, {headers: headers});
  }

  deleteThema(id: number): Observable<Thema> {
    return this.httpClient.delete<Thema>("http://localhost:3000/themas/" + id);
  }
}
