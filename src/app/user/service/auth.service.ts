import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';

import { Register } from '../model/register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = 'api/users/';
  //httpClient ===> httpsmodule is used
  //httpClient is a service then sevices are created by angular.
  //here created singleton object is provided by angular via constructor & this is called as dependency injection.

  constructor(private httpClient: HttpClient) {}
  createUserLogin(user: Login): Observable<any> {
    return this.httpClient.post(this.api + 'login', user, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  createUser(user: Register): Observable<any> {
    return this.httpClient.post(this.api + 'register', user, {
      //headers: { 'Content-Type': 'application/json' },
    });
  }
}
