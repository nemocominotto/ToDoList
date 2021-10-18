import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ListComponent } from './list/list.component';
import { ThemaFormComponent } from './thema-form/thema-form.component';
import { ThemaListComponent } from './thema-list/thema-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent},
  { path: 'thema', component: ThemaListComponent},
  { path: 'admin/item/form', component: ItemFormComponent },
  { path: 'admin/thema/form', component: ThemaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
