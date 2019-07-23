import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthContentService {
  constructor(private _http: HttpClient) {}
  getContent(): Observable<any> {
    return this._http.get<any>("http://localhost:3000/content");
  }
}
