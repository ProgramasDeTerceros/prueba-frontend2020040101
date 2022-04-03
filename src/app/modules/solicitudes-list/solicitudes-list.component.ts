import { Component, OnInit } from "@angular/core";
import { GlobalService } from "src/app/services/global.service";
import { PersonajeModel } from "src/app/shared/models/personaje.model";

@Component({
  selector: "app-solicitudes-list",
  templateUrl: "./solicitudes-list.component.html",
  styleUrls: ["./solicitudes-list.component.scss"],
})
export class SolicitudesListComponent implements OnInit {
  public estudiantes?: PersonajeModel[];
  constructor(private _global: GlobalService) {}

  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    this.estudiantes = this._global.Solcicitudes;
  }
}
