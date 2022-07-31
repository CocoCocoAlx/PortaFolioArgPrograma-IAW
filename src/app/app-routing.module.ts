import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEstudiosComponent } from './componentes/educacion/editar-estudios.component';
import { NuevoEstudioComponent } from './componentes/educacion/nuevo-estudio.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { NuevaHabilidadComponent } from './componentes/habilidades/nueva-habilidad.component';
import { LogueoComponent } from './componentes/logueo/logueo.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';

const routes: Routes = [
  {path: 'logueo', component: LogueoComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'editarexperiencia/:id', component: EditarExperienciaComponent},
  {path: 'nuevaexperiencia', component: NuevaExperienciaComponent},
  {path: 'editarestudio/:id', component: EditarEstudiosComponent},
  {path: 'nuevoestudio', component: NuevoEstudioComponent},
  {path: 'nuevoproyecto', component: NuevoProyectoComponent},
  {path: 'editarproyecto/:id', component: EditarProyectoComponent},
  {path: 'nuevahabilidad', component: NuevaHabilidadComponent},
  {path: '', redirectTo: 'principal', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
