import { Injectable } from '@angular/core';
// import { ResultDto, ResultListDto } from '@lottoland/eurojackpot/entities';
import { Observable } from 'rxjs';
import { EurojackpotApiRestService } from '../eurojackpot-api-rest.service';

@Injectable()
export class EurojackpotDataAccessService {
  results?: any;

  constructor(private restService: EurojackpotApiRestService) { }

  getResults(): Observable<any> {
    return this.restService.get<any>('/drawings/euroJackpot/');
  }

  requestResults(): Observable<any> {
    return this.restService.request('/drawings/euroJackpot/');
  }
}
