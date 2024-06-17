import {inject} from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const httpInterceptorImpl: HttpInterceptorFn = (req, next) => {
  console.log('httpInterceptorImpl')
  const authService = inject(AuthService);
  const router = inject(Router);
  const authorization = authService.getToken() == null ? '' : 'Bearer ' + authService.getToken();

  const newRequest = req.clone({
    setHeaders: {
      'Content-Type': 'application/json',
      Authorization: authorization,
    },
  });

  return next(newRequest);

}
