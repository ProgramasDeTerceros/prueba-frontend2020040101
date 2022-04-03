import { Component, Input, OnInit } from "@angular/core";
import { PersonajeModel } from "src/app/shared/models/personaje.model";

@Component({
  selector: "app-table-personaje",
  templateUrl: "./table-personaje.component.html",
  styleUrls: ["./table-personaje.component.scss"],
})
export class TablePersonajeComponent implements OnInit {
  @Input() data?: PersonajeModel[];
  public dataFilter?: PersonajeModel[];
  private filter: string = "";
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.dataChange();
  }

  dataChange() {
    if (!this.data) return;
    this.dataFilter = [
      ...this.data.filter((x) => {
        if (this.filter == "") return true;
        return (<string>x.name).toLowerCase().includes(this.filter);
      }),
    ];
  }

  filtrar(event: any): void {
    this.filter = (<string>event.target.value).toLowerCase().trim();
    this.dataChange();
  }
}
