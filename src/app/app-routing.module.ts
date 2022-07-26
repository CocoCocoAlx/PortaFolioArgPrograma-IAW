import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogueoComponent } from './componentes/logueo/logueo.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  {path: 'logueo', component: LogueoComponent},
  {path: 'principal', component: PrincipalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
