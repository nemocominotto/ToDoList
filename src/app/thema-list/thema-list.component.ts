import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Thema } from '../thema';
import { ThemaService } from '../thema.service';

@Component({
  selector: 'app-thema-list',
  templateUrl: './thema-list.component.html',
  styleUrls: ['./thema-list.component.scss']
})
export class ThemaListComponent implements OnInit, OnDestroy {
  themas: Thema[] = [];
  themas$: Subscription = new Subscription();
  deleteThema$: Subscription = new Subscription();

  constructor(private themaService: ThemaService, private router: Router) { }

  ngOnInit(): void {
    this.getThemas();
  }

  ngOnDestroy(): void {
    this.themas$.unsubscribe();
    this.deleteThema$.unsubscribe();
  }

  add() {
    this.router.navigate(['admin/thema/form'], {state: {mode: 'add'}});
  }

  edit(id: number) {
    this.router.navigate(['admin/thema/form'], {state: {id: id, mode: 'edit'}});
  }

  delete(id: number) {
    this.deleteThema$ = this.themaService.deleteThema(id).subscribe(result => {
      this.getThemas();
    });
  }

  getThemas() {
    this.themas$ = this.themaService.getThemas().subscribe(result => this.themas = result);
  }
}
