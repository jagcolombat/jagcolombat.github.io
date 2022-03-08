import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainResultsComponent } from './main-results/main-results.component';
import { UiModule } from '@lottoland/ui';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { ResultsResolver } from './services/results-resolver.service';
import { EuroJackpotDataAccessModule } from '@lottoland/euro-jackpot/data-access';

const routes: Routes = [
  { path: "", component: MainResultsComponent, resolve: { results: ResultsResolver }},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [CommonModule, EuroJackpotDataAccessModule, UiModule, FlexLayoutModule, RouterModule.forChild(routes),],
  declarations: [
    MainResultsComponent
  ],
  exports: [
    MainResultsComponent
  ],
  providers: [ResultsResolver]
})
export class EuroJackpotResultsModule {}
