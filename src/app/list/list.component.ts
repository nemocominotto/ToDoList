import { state } from '@angular/animations';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  items: Observable<Item[]> = new Observable<Item[]>();
  items$: Subscription = new Subscription();
  deleteItem$: Subscription = new Subscription();

  errorMessage: string = '';

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  ngOnDestroy(): void {
    this.items$.unsubscribe();
    this.deleteItem$.unsubscribe();
  }

  add(){
    this.router.navigate(['admin/item/form'], {state: {mode: 'add'}});
  }

  edit(id: number){
    this.router.navigate(['admin/item/form'], {state: {id: id, mode: 'edit'}});
  }

  delete(id: number) {
    this.deleteItem$ = this.itemService.deleteItem(id).subscribe(result => {
      this.itemService.getItems();
    }, error => {
      this.errorMessage = error.message;
    });
  }

}
