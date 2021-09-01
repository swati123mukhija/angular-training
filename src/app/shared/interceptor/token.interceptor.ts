import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { NEVER, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //token is required for all urls
    //do we have a token or not?

    //if you don't have valid token
    //we need to provide a bypass to login and register
    console.log(request.url);
    const a: string[] = ['login', 'register'];

    if (a.find((s) => request.url.includes(s))) {
      return next.handle(request);
    }
    console.log('inside the intercept token');

    if (localStorage.getItem('token')) {
      console.log(' we have a token');

      const data = JSON.parse(localStorage.getItem('userDetail') || '{}');
      console.log(Date.now());
      console.log(data.exp);
      if (new Date().getTime() / 1000 < data.exp) {
        console.log('token is valid');
        request = request.clone({});
      } else {
        localStorage.clear();
        this.router.navigate(['/user/login']);
        console.log('token is not valid');
        return next.handle(request);
      }
    } else {
      this.router.navigate(['/user/login']);
    }

    //if we have a token then it is valid or not
    //if it is valid then add the token then give a call to the next interceptor or rest api call
    //if not then take the user to login page.

    //return observable.create empty

    return NEVER;
  }
}
