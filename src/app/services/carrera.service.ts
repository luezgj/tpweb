import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Carrera } from '../model/carrera';
import { Message } from '../message';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CarreraService {

	private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  addCarrera(newCarrera : Carrera): Observable<Carrera>{
  	return this.http.post<Carrera>(this.baseUrl+"/carrera", httpOptions);
  }

  getCarreras(): Observable<Message>{
    return this.http.get<Message>(this.baseUrl+"/carrera", httpOptions);
  }

  getCarrera(id : Number): Observable<Message>{
    return this.http.get<Message>(this.baseUrl+"/carrera", httpOptions);
  }

  deleteCarrera(id : Number): Observable<Message>{
    return this.http.delete<Message>(this.baseUrl+"/carrera", httpOptions);
  }

  modifyCarrera(modifiedCarrera : Carrera): Observable<Message>{
    return this.http.post<Message>(this.baseUrl+"/carrera", httpOptions);
  }

  getUserLogs():Observable<Carrera[]>{
    return this.http.get<Carrera[]>(this.baseUrl+"/carrera/user", httpOptions);
  }

}
