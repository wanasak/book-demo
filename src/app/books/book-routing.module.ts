import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionPageComponent } from './containers/collection-page.component';
import { FindBookPageComponent } from './containers/find-book-page.component';
import { ViewBookPageComponent } from './containers/view-book-page.component';

const routes: Routes = [
  { path: "find", component: FindBookPageComponent },
  { path: ":id", component: ViewBookPageComponent },
  { path: "", component: CollectionPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule { }
