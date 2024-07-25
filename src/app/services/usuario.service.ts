import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly urlBase: string = 'http://100.25.45.34:8080/api';

  constructor(private http: HttpClient) { }

  buscarUsuarios(): Observable<any> {
    return this.http.get<any[]>(`${this.urlBase + '/usuarios'}`);
  }

  buscarPorId(id: number): Observable<any> {
    return this.http.get(this.urlBase + '/usuarios/' + id);
  }

  salvarUsuario(usuario: any): Observable<any> {
    return this.http.post(this.urlBase + '/usuarios', usuario);
  }

  atualizarUsuario(usuario: any): Observable<any> {
    return this.http.put(this.urlBase + '/usuarios', usuario);
  }

  deletarUsuario(id: number): Observable<any> {
    return this.http.delete(this.urlBase + '/usuarios/' + id);
  }


}
