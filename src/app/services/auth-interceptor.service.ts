import { AuthentificationService } from './authentification.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authentificationService: AuthentificationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
     
     const token = this.authentificationService.loadToken();
     console.log('token:', token);
    //  console.log(req);
     if (token == null) {
      return next.handle(req);
     }

     const modifiedReq = req.clone(
       {headers: req.headers.append('Authorization',  token)});
       return next.handle(modifiedReq);

  }
}
