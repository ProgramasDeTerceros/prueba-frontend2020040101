import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "img",
})
export class ImgPipe implements PipeTransform {
  transform(value: string | undefined, ...args: unknown[]): string {
    if (value === undefined || value === "") {
      return "./assets/img/image-not-found.png"
    }
    return <string>value;
  }
}
