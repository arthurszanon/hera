import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { text_armarinho } from '../interfaces/text-armarinho';


@Injectable({
  providedIn: 'root'
})
export class TextArmarinhoService {
  private readonly API = 'http://localhost:3000/text-armarinho';

  constructor(private http: HttpClient) { }

  list () {
    return this.http.get<text_armarinho[]>(this.API)
      .pipe(
        tap(console.log)
      );
  }
}
