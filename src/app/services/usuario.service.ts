import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from '../model/usuario';
import { Carrera } from '../model/carrera';
import { Message } from '../message';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

	private baseUrl = 'http://10.13.37.163:8080/api';

  constructor(private http: HttpClient) { }

  deleteUser(): Observable<Message>{
  	return this.http.delete<Message>(this.baseUrl+"/usuario", httpOptions);
  }

  modifyUser(modifiedUser: Usuario):Observable<Usuario>{
  	return this.http.put<Usuario>(this.baseUrl+"/usuario", modifiedUser, httpOptions);
  }

  setCarreras(carrerasList: Carrera):Observable<Usuario>{
    return this.http.put<Usuario>(this.baseUrl+"/usuario/carreras", carrerasList, httpOptions);
  }
}
