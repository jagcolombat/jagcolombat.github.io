import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinnerNumberComponent } from './components/winner-number/winner-number.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { ResultGridComponent } from './components/result-grid/result-grid.component';
import { ResultDateComponent } from './components/result-date/result-date.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    WinnerNumberComponent,
    ResultItemComponent,
    ResultGridComponent,
    ResultDateComponent
  ],
  exports: [
    WinnerNumberComponent,
    ResultItemComponent,
    ResultGridComponent,
    ResultDateComponent
  ],
})
export class UiModule {}
