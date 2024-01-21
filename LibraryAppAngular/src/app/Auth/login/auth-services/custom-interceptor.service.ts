 import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CustomInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger
    const localToken=localStorage.getItem('token');
    request =request.clone({headers:request.headers.set('Authorization',`Bearer ${localToken}`)});
    return next.handle(request);
  }
}
