import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Representante} from '../interfaces/Representante';
@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {

  private readonly urlBase: string = 'http://https://lldsv5ipw3.execute-api.us-east-1.amazonaws.com/dev/api';

  constructor(private http: HttpClient) { }

  buscarRepresentantes(): Observable<any> {
    return this.http.get<any[]>(`${this.urlBase + '/representantes'}`);
  }

  buscarPorId(id: number): Observable<any> {
    return this.http.get(this.urlBase + '/representantes/?codigo=' + id);
  }
}
