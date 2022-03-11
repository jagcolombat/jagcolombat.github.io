import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {
        path: "euro-jackpot", loadChildren: () => import("@lottoland/euro-jackpot/layout").then(m => m.EuroJackpotLayoutModule),
    },
    {path: "", pathMatch: "full", redirectTo: "euro-jackpot"}
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