import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items$: Observable<Item[]> = new Observable<Item[]>();
  vandaag: Date = new Date();

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items$ = this.itemService.getItems().pipe(
      map(result => result.sort((x,y) => <any>new Date(x.date) - <any>new Date(y.date)))
    );
  }

  ngOnDestroy(): void {
  }
}
