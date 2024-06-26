import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  private readonly urlBase: string = 'http://localhost:8087/api';

  constructor(private http: HttpClient) { }

  buscarOrcamentos(): Observable<any> {
    return this.http.get<any[]>(`${this.urlBase + '/orcamentos'}`);
  }

  buscarPorId(id: number): Observable<any> {
    return this.http.get(this.urlBase + '/orcamentos/?codigo=' + id);
  }

  salvar(orcamento: any): Observable<any> {
    return this.http.post(this.urlBase + '/orcamentos', orcamento);
  }

  atualizar(orcamento: any): Observable<any> {
    return this.http.put(this.urlBase + '/orcamentos', orcamento);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(this.urlBase + '/orcamentos/' + id);
  }

}
