import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {AuthGuard} from './guard/auth.guard';
import { httpInterceptorImpl } from './guard/http.interceptor';
import {withInterceptors, withInterceptorsFromDi} from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors(
        [httpInterceptorImpl]
      )
    ),
  ]
};
