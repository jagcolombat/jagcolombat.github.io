import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiRestService } from './services/api-rest.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [ApiRestService],
})
export class ApiRestModule {}
