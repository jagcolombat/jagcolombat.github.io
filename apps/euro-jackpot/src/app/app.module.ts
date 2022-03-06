import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EuroJackpotDataAccessModule } from '@lottoland/euro-jackpot/data-access';
import { EuroJackpotLayoutModule } from '@lottoland/euro-jackpot/layout';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule, EuroJackpotLayoutModule,
    BrowserAnimationsModule,
    EuroJackpotDataAccessModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
