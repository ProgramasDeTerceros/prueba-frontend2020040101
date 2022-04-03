import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalService } from "src/app/services/global.service";
import { PersonajeModel } from "src/app/shared/models/personaje.model";

@Component({
  selector: "app-solicitud-estudiante",
  templateUrl: "./solicitud-estudiante.component.html",
  styleUrls: ["./solicitud-estudiante.component.scss"],
})
export class SolicitudEstudianteComponent implements OnInit {
  constructor(private _global: GlobalService, private _router: Router) {}

  ngOnInit(): void {}

  addEstudiante(estudiante: PersonajeModel) {
    this._global.addSolicitud(estudiante);
    this._router.navigate(["/estudiantes", "list-solicitud"]);
  }
}
