import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { UserInfo } from './user-info';
import { Message } from '../message';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private baseUrl = 'http://10.13.37.163:8080/api';

  constructor(private http: HttpClient) { }

  login(credentials: UserInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.baseUrl+"/auth/login", credentials, httpOptions);
  }

  signUp(info: UserInfo): Observable<Message> {
    return this.http.post<Message>(this.baseUrl+"/auth/register", info, httpOptions);
  }
}
