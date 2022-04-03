import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { PersonajeModel } from "src/app/shared/models/personaje.model";

@Component({
  selector: "app-form-solicitud",
  templateUrl: "./form-solicitud.component.html",
  styleUrls: ["./form-solicitud.component.scss"],
})
export class FormSolicitudComponent implements OnInit {
  @Input() public data: PersonajeModel = new PersonajeModel();
  @Output() public onData: EventEmitter<PersonajeModel>;
  public forma: FormGroup;
  constructor(private _fb: FormBuilder, private _router: Router) {
    this.onData = new EventEmitter();
    this.forma = this._fb.group({});
    this.initForm();
  }

  ngOnInit(): void {}

  cancel() {
    this._router.navigate(["/estudiantes", "solicitud"]);
  }
  initForm() {
    this.forma = this._fb.group({
      name: ["", [Validators.required]],
      patronus: [""],
      dateOfBirth: [""],
    });
  }

  onAction() {
    if ((<FormGroup>this.forma).invalid) {
      Object.values(this.forma.controls).forEach((c) => {
        c.markAsTouched();
      });
      return;
    }
    const d = <PersonajeModel>this.forma.value;
    this.onData.emit(d);
  }

  InvalidField(Field: string): boolean {
    if (!(<FormGroup>this.forma).get(Field)) {
      return false;
    }
    const l = <AbstractControl>(<FormGroup>this.forma).get(Field);
    return l.invalid && l.touched;
  }

  get nameInvalid(): boolean {
    return this.InvalidField("name");
  }
  get patronusInvalid(): boolean {
    return this.InvalidField("patronus");
  }
  get dateOfBirthInvalid(): boolean {
    return this.InvalidField("dateOfBirth");
  }
}
