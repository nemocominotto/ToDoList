import { Injectable } from '@angular/core';
import { Item } from './item';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ThemaService } from './thema.service';
import { Thema } from './thema';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>("http://localhost:3000/items");
  }

  getItemById(id: number): Observable<Item> {
    return this.httpClient.get<Item>("http://localhost:3000/items/" + id);
  }

  postItem(item: Item): Observable<Item> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Item>("http://localhost:3000/items", item, {headers: headers});
  }

  putItem(id:number, item: Item): Observable<Item> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Item>("http://localhost:3000/items/" + id, item, {headers: headers});
  }

  deleteItem(id: number): Observable<Item> {
    return this.httpClient.delete<Item>("http://localhost:3000/items/" + id);
  }
}
