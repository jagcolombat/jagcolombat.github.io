import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {
        path: "drawing-results", loadChildren: () => import("@lottoland/euro-jackpot/results").then(m => m.EuroJackpotResultsModule),
    },
    {path: "", pathMatch: "full", redirectTo: "drawing-results"},
    {path: "**", redirectTo: ""}
];
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}