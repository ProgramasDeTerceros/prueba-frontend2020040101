import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiEscuelaService {
  private _server = "http://hp-api.herokuapp.com";
  private _url = this._server + "/api/characters/";
  constructor(private _http: HttpClient) {}

  GetQuery(query: string): Observable<object> {
    return this._http.get(`${this._url}${query}`);
  }
  PostQuery(query: string, data: any): Observable<object> {
    const header = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this._http.post(`${this._url}${query}`, data, { headers: header });
  }
  PutQuery(query: string, data: any): Observable<object> {
    const header = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this._http.put(`${this._url}${query}`, data, { headers: header });
  }
  DeleteQuery(query: string): Observable<object> {
    const header = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this._http.delete(`${this._url}${query}`, { headers: header });
  }
}
