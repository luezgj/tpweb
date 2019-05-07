import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Mesa } from '../model/mesa';
import { Message } from '../message';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class MesaService {

	private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  addMesa(newMesa : Mesa): Observable<Message>{
  	return this.http.post<Message>(this.baseUrl+"/mesa", httpOptions);
  }

  getMesa(): Observable<Message>{
  	return this.http.get<Message>(this.baseUrl+"/mesa", httpOptions);
  }

  getMesa(nombre : String): Observable<Message>{
    return this.http.get<Message>(this.baseUrl+"/mesa", httpOptions);
  }

}
