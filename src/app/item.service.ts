import { Injectable } from '@angular/core';
import { Item } from './item';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
}
