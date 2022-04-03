import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { PersonajeModel } from "../shared/models/personaje.model";
import { ApiEscuelaService } from "./api-escuela.service";

@Injectable({
  providedIn: "root",
})
export class PersonajeService {
  private _urlA: String = "house";
  private _urlB: String = "students";
  private _urlC: String = "staff";

  constructor(private _api: ApiEscuelaService) {}

  getListPersonaje(casa: String): Observable<PersonajeModel[]> {
    return this._api.GetQuery(`${this._urlA}/${casa}`).pipe(
      map((data: any) => {
        return <Array<PersonajeModel>>data;
      })
    );
  }
  getListEstudiantes(): Observable<PersonajeModel[]> {
    return this._api.GetQuery(`${this._urlB}`).pipe(
      map((data: any) => {
        return <Array<PersonajeModel>>data;
      })
    );
  }

  getListProfesores(): Observable<PersonajeModel[]> {
    return this._api.GetQuery(`${this._urlC}`).pipe(
      map((data: any) => {
        return <Array<PersonajeModel>>data;
      })
    );
  }
}
