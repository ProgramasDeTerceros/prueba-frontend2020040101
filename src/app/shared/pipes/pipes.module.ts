import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalEdadPipe } from "./cal-edad.pipe";
import { ImgPipe } from "./img.pipe";

const declarations = [CalEdadPipe, ImgPipe];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [...declarations],
})
export class PipesModule {}
