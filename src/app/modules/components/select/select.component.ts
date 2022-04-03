import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { HouseModel } from "src/app/shared/models/house.model";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
})
export class SelectComponent implements OnInit {
  @Input() labelName: string = "";
  @Input() data?: HouseModel[];

  @Output() onChangeCasa: EventEmitter<string>;
  constructor() {
    this.onChangeCasa = new EventEmitter();
  }

  ngOnInit(): void {}
  newCasa(event: any) {
    this.onChangeCasa.emit(event.target.value);
  }
}
