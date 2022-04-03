import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SeccionEstudiantesComponent } from "src/app/modules/seccion-estudiantes/seccion-estudiantes.component";
import { SeccionPersonajeComponent } from "src/app/modules/seccion-personaje/seccion-personaje.component";
import { SeccionProfesoresComponent } from "src/app/modules/seccion-profesores/seccion-profesores.component";
import { SolicitudEstudianteComponent } from "src/app/modules/solicitud-estudiante/solicitud-estudiante.component";
import { SolicitudesListComponent } from "src/app/modules/solicitudes-list/solicitudes-list.component";

const routes: Routes = [
  { path: "personajes", component: SeccionPersonajeComponent },
  { path: "estudiantes", component: SeccionEstudiantesComponent },
  { path: "profesores", component: SeccionProfesoresComponent },
  { path: "estudiantes/solicitud", component: SolicitudEstudianteComponent },
  { path: "estudiantes/list-solicitud", component: SolicitudesListComponent },
  { path: "**", pathMatch: "full", redirectTo: "personajes" },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
