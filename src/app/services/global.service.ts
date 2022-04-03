import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GlobalModel } from "../shared/models/global.model";
import { PersonajeModel } from "../shared/models/personaje.model";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  private _global: GlobalModel = new GlobalModel();

  constructor() {}

  private _nameVar = "escuela-var";

  getVar(): void {
    if (sessionStorage.getItem(this._nameVar)) {
      this._global = JSON.parse(sessionStorage.getItem(this._nameVar) || "");
    } else {
      this._global = new GlobalModel();
    }
  }
  clearVar() {
    if (sessionStorage.getItem(this._nameVar)) {
      sessionStorage.removeItem(this._nameVar);
    }
  }
  varAllSave() {
    //console.log(this._variables);
    sessionStorage.setItem(this._nameVar, JSON.stringify(this._global));
  }

  addSolicitud(data: PersonajeModel) {
    console.log(data);
    this.Solcicitudes.push(data);
    this.varAllSave();
  }

  set Solcicitudes(dato) {
    this._global.personajes = dato;
    this.varAllSave();
  }

  get Solcicitudes(): PersonajeModel[] {
    this.getVar();
    if (this._global.personajes == null) {
      this._global.personajes = [];
    }
    return this._global.personajes;
  }
}
