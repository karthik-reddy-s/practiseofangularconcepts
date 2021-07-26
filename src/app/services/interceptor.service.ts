import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import{LoaderService} from 'src/app/loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService  implements HttpInterceptor {

  constructor(private loaderservice:LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderservice.isloading.next(true);
    return next.handle(req).pipe(
      finalize(
        ()=>{this.loaderservice.isloading.next(false);}
          
        )
      );
    
  }
}
