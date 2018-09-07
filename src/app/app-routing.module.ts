import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundPageComponent } from "./core/containers/not-found-page.component";
import { AuthGuard } from "./auth/services/auth-guard.service";

export const routes: Routes = [
    { path: "", redirectTo: "/books", pathMatch: "full" },
    {
        path: "books",
        loadChildren: "../app/books/books.module#BooksModule",
        canActivate: [AuthGuard]
    },
    { path: "**", component: NotFoundPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
