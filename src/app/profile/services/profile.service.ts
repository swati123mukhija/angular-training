import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  api = 'api/profile';

  constructor(private httpClient: HttpClient) {}

  getprofile(): Observable<any> {
    return this.httpClient.get(this.api);
  }
}
