import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EuroJackpotLayoutModule } from '@lottoland/euro-jackpot/layout';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, EuroJackpotLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
