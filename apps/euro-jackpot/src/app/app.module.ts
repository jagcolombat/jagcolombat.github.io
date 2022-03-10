import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { EuroJackpotLayoutModule } from '@lottoland/euro-jackpot/layout';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { UtilsModule } from '@lottoland/utils';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    AppRoutingModule,
    EuroJackpotLayoutModule,
    UtilsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
