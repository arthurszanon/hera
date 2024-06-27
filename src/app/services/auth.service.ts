// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://https://lldsv5ipw3.execute-api.us-east-1.amazonaws.com/dev/api/auth'; // Atualize para a URL do seu backend

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('logged');
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('logged', 'true');
  }
}
