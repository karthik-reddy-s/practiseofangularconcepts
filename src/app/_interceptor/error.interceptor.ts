  
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  message;

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      retry(1),
      catchError((err) => {
        console.log('Written inside interceptor : INTERCEPTOR');
        if (err) {
          switch (err.status) {
            case 0:
              console.log(err.statusText);
              console.log(err.message);
              console.log(err.error.type);
              this.message = err.statusText;
              break;
            case 400:
              console.log(err.statusText);
              console.log(err.message);
              console.log(err.error.type);
              this.message = err.error;
              break;
          }
        }
        return throwError(this.message);
      })
    );
  }
}