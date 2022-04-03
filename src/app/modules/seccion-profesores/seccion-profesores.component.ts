import { Component, OnInit } from "@angular/core";
import { PersonajeService } from "src/app/services/personaje.service";
import { PersonajeModel } from "src/app/shared/models/personaje.model";

@Component({
  selector: "app-seccion-profesores",
  templateUrl: "./seccion-profesores.component.html",
  styleUrls: ["./seccion-profesores.component.scss"],
})
export class SeccionProfesoresComponent implements OnInit {
  public profesores: PersonajeModel[];
  constructor(private _personajeService: PersonajeService) {
    this.profesores = [];
  }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this._personajeService.getListProfesores().subscribe(
      (res: PersonajeModel[]) => {
        this.profesores = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
