import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'https://reqres.in/api/users';

  constructor(private _httpClient: HttpClient) {}

  getUser(id: string): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}/${id}`);
  }

  getUsers(page: number): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}?page=${page}`);
  }
}
