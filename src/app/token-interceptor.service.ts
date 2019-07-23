import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private _auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._auth.getToken()}`
      }
    });
    return next.handle(req);
  }
}
