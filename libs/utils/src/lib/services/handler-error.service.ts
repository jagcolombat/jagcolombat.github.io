import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandlerErrorService {
  error$: Subject<string> = new Subject();

  sendErrorMsg(error: any) {
    console.log('sendError', error);
    let errorMessage = "Unknown error";
    if(error.status === 400) {
        errorMessage = "Error sending data";
    } else if(error.status === 403) {
        errorMessage = "User unauthorized";
    } else if(error.status === 409) {
        errorMessage = error.error.message;;
    } else if(error.status === 504) {
      errorMessage = error.message;;
    } else if(error.status >= 500) {
        errorMessage = "Internal server error";
    } else if(error.status >= 400 || error.status === 0) {
        errorMessage = "Error communicating with server";
    }
    this.error$.next(errorMessage);
  }
}
