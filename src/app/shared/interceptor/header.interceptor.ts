import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.headers.has('Content-type')) {
      const secureReq = request.clone({
        headers: request.headers.set('Content-type', 'application/json'),
      });
      return next.handle(secureReq);
    }
    return next.handle(request);
  }
}
