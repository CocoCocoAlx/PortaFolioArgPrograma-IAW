import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { LogueoComponent } from './componentes/logueo/logueo.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  {path: 'logueo', component: LogueoComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'nuevaexperiencia', component: NuevaExperienciaComponent},
  {path: '', redirectTo: 'logueo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
