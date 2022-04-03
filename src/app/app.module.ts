import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app-routing/app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { SeccionPersonajeComponent } from "./modules/seccion-personaje/seccion-personaje.component";
import { SeccionEstudiantesComponent } from "./modules/seccion-estudiantes/seccion-estudiantes.component";
import { SeccionProfesoresComponent } from "./modules/seccion-profesores/seccion-profesores.component";
import { ComponentsModule } from "./modules/components/components.module";
import { PipesModule } from "./shared/pipes/pipes.module";
import { SolicitudEstudianteComponent } from './modules/solicitud-estudiante/solicitud-estudiante.component';
import { SolicitudesListComponent } from './modules/solicitudes-list/solicitudes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SeccionPersonajeComponent,
    SeccionEstudiantesComponent,
    SeccionProfesoresComponent,
    SolicitudEstudianteComponent,
    SolicitudesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
