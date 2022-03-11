import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EuroJackpotResultsModule } from '@lottoland/euro-jackpot/results';
import { EuroJackpotLayoutComponent } from './components/euro-jackpot-layout/euro-jackpot-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '@lottoland/ui';
import { NgxSpinnerModule } from 'ngx-spinner';

const routes: Routes = [
  { 
    path: "", 
    component: EuroJackpotLayoutComponent,
    children: [
      {
        path: 'drawing-results', 
        loadChildren: () => import("@lottoland/euro-jackpot/results").then(m => m.EuroJackpotResultsModule)
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), NgxSpinnerModule],
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    EuroJackpotLayoutComponent
  ],
  exports: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    EuroJackpotLayoutComponent
  ],
})
export class EuroJackpotLayoutModule {}
