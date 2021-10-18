import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Thema } from '../thema';
import { ThemaService } from '../thema.service';

@Component({
  selector: 'app-thema-form',
  templateUrl: './thema-form.component.html',
  styleUrls: ['./thema-form.component.scss']
})
export class ThemaFormComponent implements OnInit, OnDestroy {
  isAdd: boolean = false;
  isEdit: boolean = false;
  themaId: number = 0;

  thema: Thema = {id:0, name:"", color:""};

  isSubmitted: boolean = false;
  errorMessage: string = "";

  thema$: Subscription = new Subscription();
  postThema$: Subscription = new Subscription();
  putThema$: Subscription = new Subscription();

  constructor(private router: Router, private themaService: ThemaService) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.themaId = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.themaId != null && this.themaId > 0) {
      this.thema$ = this.themaService.getThemaById(this.themaId).subscribe(result => this.thema = result);
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.thema$.unsubscribe();
    this.postThema$.unsubscribe();
    this.putThema$.unsubscribe();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postThema$ = this.themaService.postThema(this.thema).subscribe(result => {
                this.router.navigateByUrl("/thema");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
    if (this.isEdit) {
      this.putThema$ = this.themaService.putThema(this.themaId, this.thema).subscribe(result => {
                this.router.navigateByUrl("/thema");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
  }

}
