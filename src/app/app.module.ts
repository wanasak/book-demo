import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule } from "@angular/common/http";
import { AuthModule } from "./auth/auth.module";
import { AppRoutingModule } from "./app-routing.module";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./reducers";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { environment } from "../environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { CommonModule } from "@angular/common";
import { DBModule } from "@ngrx/db";
import { schema } from "./db";
import { AppComponent } from "./core/containers/app.component";
import { CoreModule } from "./core/core.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: "ngrx book demo",
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    DBModule.provideDB(schema),
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
