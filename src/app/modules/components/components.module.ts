import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { TablePersonajeComponent } from "./table-personaje/table-personaje.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AppRoutingModule } from "src/app-routing/app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoadingComponent } from "./loading/loading.component";
import { SelectComponent } from "./select/select.component";
import { PipesModule } from "src/app/shared/pipes/pipes.module";

const declarations = [
  HeaderComponent,
  FooterComponent,
  TablePersonajeComponent,
  NavbarComponent,
  LoadingComponent,
  SelectComponent,
];
@NgModule({
  declarations: [...declarations],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  exports: [...declarations],
})
export class ComponentsModule {}
