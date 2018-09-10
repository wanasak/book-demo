import { NgModule } from "@angular/core";
import { BookAuthorsComponent } from "./book-authors.component";
import { CommonModule } from "@angular/common";
import { PipesModule } from "../../shared/pipes";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../../material";
import { ReactiveFormsModule } from "@angular/forms";
import { BookDetailComponent } from "./book-detail.component";
import { BookSearchComponent } from "./book-search.component";
import { BookPreviewComponent } from "./book-preview.component";
import { BookPreviewListComponent } from "./book-preview-list.component";

export const COMPONENTS = [
  BookAuthorsComponent,
  BookDetailComponent,
  BookSearchComponent,
  BookPreviewComponent,
  BookPreviewListComponent
];

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: COMPONENTS,
  declarations: COMPONENTS
})
export class ComponentsModule {}
