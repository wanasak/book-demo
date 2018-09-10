import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material";
import { BookRoutingModule } from "./book-routing.module";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./reducers";
import { EffectsModule } from "@ngrx/effects";
import { BookEffects } from "./effects/book.effects";
import { CollectionEffects } from "./effects/collection.effects";
import { ViewBookPageComponent } from "./containers/view-book-page.component";
import { ComponentsModule } from "./components";
import { SelectedBookPageComponent } from "./containers/selected-book-page.component";
import { FindBookPageComponent } from "./containers/find-book-page.component";
import { CollectionPageComponent } from "./containers/collection-page.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BookRoutingModule,
    ComponentsModule,
    StoreModule.forFeature("books", reducers),
    EffectsModule.forFeature([BookEffects, CollectionEffects])
  ],
  declarations: [
    ViewBookPageComponent,
    SelectedBookPageComponent,
    FindBookPageComponent,
    CollectionPageComponent
  ]
})
export class BooksModule {}
