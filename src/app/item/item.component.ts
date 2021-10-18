import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item = {id:1, title:"", content:"", date: new Date(), active: true, themaId: 0};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  edit(id: number){
    this.router.navigate(['admin/item/form'], {state: {id: id, mode: 'edit'}});
  }

}
