import { Component, OnInit } from "@angular/core";
import { PersonajeService } from "src/app/services/personaje.service";
import { PersonajeModel } from "src/app/shared/models/personaje.model";

@Component({
  selector: "app-seccion-estudiantes",
  templateUrl: "./seccion-estudiantes.component.html",
  styleUrls: ["./seccion-estudiantes.component.scss"],
})
export class SeccionEstudiantesComponent implements OnInit {
  public estudiantes?: PersonajeModel[];
  constructor(private _personajeService: PersonajeService) {
  }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this._personajeService.getListEstudiantes().subscribe(
      (res: PersonajeModel[]) => {
        this.estudiantes = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
