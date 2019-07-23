import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  getRegistrationInfo(userInfo) {
    return this._http.post<any>("http://localhost:3000/register", userInfo);
  }

  getLoginInfo(userInfo) {
    return this._http.post<any>("http://localhost:3000/login", userInfo);
  }

  loggedIn() {
    return !!localStorage.token;
  }

  getToken() {
    return localStorage.token;
  }
}
