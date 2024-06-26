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

  buscarCategorias(): Observable<any> {
    return this.http.get(this.urlBase + '/produtos/categorias');
  }

  buscarPorCategoria(categoria: string): Observable<any> {
    return this.http.get(this.urlBase + '/produtos/categoria/' + categoria);
  }

  addToCart(product: any) {
    const cart = localStorage.getItem('cart');
    let cartArray = cart ? JSON.parse(cart) : [];
    const index = cartArray.findIndex((p: any) => p.id === product.id);
    if (index === -1) {
      cartArray.push(product);
    } else {
      cartArray[index].quantidade += product.quantidade;
    }
    localStorage.setItem('cart', JSON.stringify(cartArray));
  }

  removeFromCart(product: any) {
    const cart = localStorage.getItem('cart');
    let cartArray = cart ? JSON.parse(cart) : [];
    const index = cartArray.findIndex((p: any) => p.id === product.id);
    if (index !== -1) {
      cartArray.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cartArray));
  }

  getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  clearCart() {
    localStorage.removeItem('cart');
  }
}
