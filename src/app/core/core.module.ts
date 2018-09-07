import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material";
import { AppComponent } from "./containers/app.component";
import { NotFoundPageComponent } from "./containers/not-found-page.component";

export const COMPONENTS = [AppComponent, NotFoundPageComponent];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {}
