import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiaW5ub3ZhY2lvbmVzIiwicGFzc3dvcmQiOiJASW5ub1dlYjIwMjEjIn0sImlhdCI6MTYyMjYwMzg1NX0.bLN6-5wdEBs8Dg0QVngSosvahmCNIpfe5O-MxWZjFqY';

    if (idToken) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization',
          'Bearer ' + idToken)
      });

      return next.handle(cloned);
    }
    else {
      return next.handle(request);
    }
  }
}
