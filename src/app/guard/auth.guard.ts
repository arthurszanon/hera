import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (!this.hasToken()) {
            this.router.navigate(['/auth/login']);
            return false;
        }

        return true;

    }

    hasToken() {
        return window.localStorage.getItem('token') !== null;
    }

    getToken() {
        return window.localStorage.getItem('token');
    }

    getTokenPayload() {
        const token = this.getToken();

        if (!token) {
            return null;
        }

      return jwtDecode<any>(token);
    }
}
