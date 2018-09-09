import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material";
import { AppComponent } from "./containers/app.component";
import { NotFoundPageComponent } from "./containers/not-found-page.component";
import { ToolbarComponent } from "./components/toolbar.component";
import { LayoutComponent } from "./components/layout.component";
import { SidenavComponent } from "./components/sidenav.component";
import { NavItemComponent } from "./components/nav-item.component";

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  ToolbarComponent,
  LayoutComponent,
  SidenavComponent,
  NavItemComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {}
