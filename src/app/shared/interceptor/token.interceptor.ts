import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //token is required for all urls
    //do we have a token or not?

    if (localStorage.getItem('token')) {
      console.log('token is generated');
    }
    const exp = JSON.parse(jwtDecode(localStorage.getItem('token') || '{}'));

    //if we have a token then it is valid or not
    //if it is valid then add the token then give a call to the next interceptor or rest api call
    //if not then take the user to login page.

    return next.handle(request);
  }
}
