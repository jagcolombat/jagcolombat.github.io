import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EurojackpotDataAccessService } from './services/entities/eurojackpot-data-access.service';
import { EurojackpotApiRestService } from './services/eurojackpot-api-rest.service';
import { ApiRestModule } from '@lottoland/api-rest';

@NgModule({
  imports: [CommonModule, ApiRestModule],
  providers: [EurojackpotDataAccessService, EurojackpotApiRestService]
})
export class EuroJackpotDataAccessModule {}
