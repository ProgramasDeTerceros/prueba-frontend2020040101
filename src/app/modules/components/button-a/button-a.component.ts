import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-button-a",
  templateUrl: "./button-a.component.html",
  styleUrls: ["./button-a.component.scss"],
})
export class ButtonAComponent implements OnInit {
  @Input() private edit?: boolean;
  @Input() private id?: number;
  @Output() onCancel: EventEmitter<any>;

  public editar: boolean;
  constructor() {
    this.editar = false;
    this.onCancel = new EventEmitter();
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.edit || (this.id && this.id > 0)) {
      this.editar = true;
    }
  }

  cancel() {
    this.onCancel.emit();
  }
}
