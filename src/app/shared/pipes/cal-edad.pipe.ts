import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "calEdad",
})
export class CalEdadPipe implements PipeTransform {
  transform(value: string | undefined, ...args: unknown[]): string {
    if (value === undefined || value === "") {
      return "";
    }
    const fecha = new Date(<string>value).getTime();
    const anios = new Date().getFullYear() - fecha;
    return `${anios} años`;
  }
}
