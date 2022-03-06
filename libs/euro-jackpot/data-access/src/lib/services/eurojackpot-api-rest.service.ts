import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRestService } from '@lottoland/api-rest';
import { environment } from '@lottoland/euro-jackpot-env/environment';
import { Observable } from 'rxjs';

@Injectable()
export class EurojackpotApiRestService {

  constructor(private apiService: ApiRestService) { }

  get<T>(url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.apiService.get<T>(`${environment.api_url}${url}`, params);
  }

  post<T, D>(url: string, data: D): Observable<T> {
    return this.apiService.post(environment.api_url+url, data);
  }

  put<T, D>(url: string, data: D): Observable<T> {
    return this.apiService.put(`${environment.api_url}${url}`, data);
  }

  delete<T>(url: string, params?: any): Observable<T> {
    return this.apiService.delete<T>(`${environment.api_url}${url}`);
  }
}
