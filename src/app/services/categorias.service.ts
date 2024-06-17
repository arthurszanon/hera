import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { matconcategoria } from '../interfaces/matconcategoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private readonly APIcategory = 'http://localhost:3000/categoria';

  constructor(private http: HttpClient) { }
  list () {
    return this.http.get<[matconcategoria]>(this.APIcategory)
      .pipe(
        tap(console.log)
      );
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
}

}
