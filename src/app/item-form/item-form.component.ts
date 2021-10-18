import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Thema } from '../thema';
import { ThemaService } from '../thema.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit, OnDestroy {
  isAdd: boolean = false;
  isEdit: boolean = false;
  itemId: number = 0;

  item: Item = {id:0, title:"", content:"", date: new Date(), active: false, themaId: 0};

  isSubmitted: boolean = false;
  errorMessage: string = "";

  themas: Observable<Thema[]> = new Observable<Thema[]>();

  item$: Subscription = new Subscription();
  postItem$: Subscription = new Subscription();
  putItem$: Subscription = new Subscription();

  constructor(private router: Router, private itemService: ItemService, private themaService: ThemaService) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.itemId = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.itemId != null && this.itemId > 0) {
      this.item$ = this.itemService.getItemById(this.itemId).subscribe(result => this.item = result);
    }
  }

  ngOnInit(): void {
    this.themas = this.themaService.getThemas();
  }

  ngOnDestroy(): void {
    this.item$.unsubscribe();
    this.postItem$.unsubscribe();
    this.putItem$.unsubscribe();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postItem$ = this.itemService.postItem(this.item).subscribe(result => {
                this.router.navigateByUrl("/list");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
    if (this.isEdit) {
      this.putItem$ = this.itemService.putItem(this.itemId, this.item).subscribe(result => {
                this.router.navigateByUrl("/list");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
  }

}
