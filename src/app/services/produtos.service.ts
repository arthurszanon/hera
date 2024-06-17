import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {produtos} from '../interfaces/produtos';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly urlBase: string = 'http://localhost:8087/api';

  constructor(private http: HttpClient) { }

  buscarProdutos(): Observable<any> {
    return this.http.get<any[]>(`${this.urlBase + '/produtos'}`);
  }

  buscarPorId(id: number): Observable<any> {
    return this.http.get(this.urlBase + '/produtos/?codigo=' + id);
  }
}
