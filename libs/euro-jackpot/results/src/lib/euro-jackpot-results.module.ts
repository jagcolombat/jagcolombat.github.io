import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainResultsComponent } from './main-results/main-results.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MainResultsComponent
  ],
  exports: [
    MainResultsComponent
  ],
})
export class EuroJackpotResultsModule {}
