import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent},
  { path: 'admin/item/form', component: ItemFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
