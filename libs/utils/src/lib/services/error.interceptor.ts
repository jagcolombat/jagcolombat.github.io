import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import { LoaderService } from "./loader.service";
import { HandlerErrorService } from "./handler-error.service";

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private loaderServ: LoaderService, private handlerErrorserv: HandlerErrorService) {
        console.log('error interceptor constructor')
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("errorInterceptor", request, next);
         return next.handle(request).pipe(
            tap({ 
                next: (_event: HttpEvent<any>) => {
                    console.log("errorInterceptor", _event);
                 },
                error: (error: any) => {
                    console.error("errorInterceptor", error);
                    this.handlerErrorserv.sendErrorMsg(error);
                }
            }    
        ));
    }
}

