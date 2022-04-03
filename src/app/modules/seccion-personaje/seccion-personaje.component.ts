import { Component, OnInit } from "@angular/core";
import { HouseService } from "src/app/services/house.service";
import { PersonajeService } from "src/app/services/personaje.service";
import { HouseModel } from "src/app/shared/models/house.model";
import { PersonajeModel } from "src/app/shared/models/personaje.model";

@Component({
  selector: "app-seccion-personaje",
  templateUrl: "./seccion-personaje.component.html",
  styleUrls: ["./seccion-personaje.component.scss"],
})
export class SeccionPersonajeComponent implements OnInit {
  public personajes?: PersonajeModel[]=[]; 
  public casas?: HouseModel[];
  constructor(
    private _personajeService: PersonajeService,
    private _houseService: HouseService
  ) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._houseService.getList().subscribe(
      (res: HouseModel[]) => {
        this.casas = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  changeCasa(casa: String) {
    this._personajeService.getListPersonaje(casa).subscribe(
      (res) => {
        this.personajes = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
