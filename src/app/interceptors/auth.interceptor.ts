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
    const idToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiaW5ub3ZhY2lvbmVzIiwicGFzc3dvcmQiOiJASW5ub1dlYjIwMjEjIn0sImlhdCI6MTYyMjQzMzk0MX0.YR_vNdoqKRifuw2jjLSLhI1WwPRtoJDic-np9FUtCSU";

    if (idToken) {
      console.log("Modify request");

      const cloned = request.clone({
        headers: request.headers.set("Authorization",
          "Bearer " + idToken)
      });

      return next.handle(cloned);
    }
    else {
      console.log("Not modify request");
      return next.handle(request);
    }
  }
}
