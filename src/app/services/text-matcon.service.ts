import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { text_matcon } from '../interfaces/text-matcon';

@Injectable({
  providedIn: 'root'
})
export class TextMatconService {
  private readonly API = 'http://localhost:3000/text-matcon';

  constructor(private http: HttpClient) { }

  list () {
    return this.http.get<text_matcon[]>(this.API)
      .pipe(
        tap(console.log)
      );
  }
}
