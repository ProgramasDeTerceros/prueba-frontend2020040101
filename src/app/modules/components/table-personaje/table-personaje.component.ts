import { Component, Input, OnInit } from "@angular/core";
import { PersonajeModel } from "src/app/shared/models/personaje.model";

@Component({
  selector: "app-table-personaje",
  templateUrl: "./table-personaje.component.html",
  styleUrls: ["./table-personaje.component.scss"],
})
export class TablePersonajeComponent implements OnInit {
  @Input() data?: PersonajeModel[];

  constructor() {}

  ngOnInit(): void {}
}
