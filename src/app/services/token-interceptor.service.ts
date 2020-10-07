import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const _token = localStorage.getItem('auth-token');

      if (_token != null) {

            const tokenizedReq = req.clone({
                setHeaders: {
                    'auth-token': `${_token}`
                }
            });
            return next.handle(tokenizedReq);
        } else {
            return next.handle(req);
        }
    }
}
