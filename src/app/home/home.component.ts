import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items$: Observable<Item[]> = new Observable<Item[]>();

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items$ = this.itemService.getItems();
  }

  ngOnDestroy(): void {
  }
}
