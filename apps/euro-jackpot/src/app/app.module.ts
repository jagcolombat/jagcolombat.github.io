import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { EuroJackpotLayoutModule } from '@lottoland/euro-jackpot/layout';
import { AppComponent } from './app.component';
import { UtilsModule } from '@lottoland/utils';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    RouterModule,
    AppRoutingModule,
    EuroJackpotLayoutModule,
    UtilsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
