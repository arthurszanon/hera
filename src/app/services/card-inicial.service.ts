import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { card_inicial } from '../interfaces/card-inicial';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CardInicialService {
  private readonly API = 'http://localhost:3000/card-inicial';

  constructor(private http: HttpClient) { }

  list () {
    return this.http.get<card_inicial[]>(this.API)
      .pipe(
        tap(console.log)
      );
  }
}
