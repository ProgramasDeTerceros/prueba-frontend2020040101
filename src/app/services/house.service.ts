import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { HouseModel } from "../shared/models/house.model";

@Injectable({
  providedIn: "root",
})
export class HouseService {
  Houses = [
    { name: "Gryffindor" },
    { name: "Hufflepuff" },
    { name: "Ravenclaw" },
    { name: "Slytherin" },
  ];

  constructor() {}

  getList(): Observable<HouseModel> {
    return of(this.Houses).pipe(map((data) => <HouseModel>data));
  }
}
