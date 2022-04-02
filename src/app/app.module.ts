import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app-routing/app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { SeccionPersonajeComponent } from "./modules/seccion-personaje/seccion-personaje.component";
import { SeccionEstudiantesComponent } from "./modules/seccion-estudiantes/seccion-estudiantes.component";
import { SeccionProfesoresComponent } from "./modules/seccion-profesores/seccion-profesores.component";
import { ComponentsModule } from "./modules/components/components.module";

@NgModule({
  declarations: [
    AppComponent,
    SeccionPersonajeComponent,
    SeccionEstudiantesComponent,
    SeccionProfesoresComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
