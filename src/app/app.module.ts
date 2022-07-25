import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

/* Secciones del proyecto */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { LogoargprogramaComponent } from './componentes/logoargprograma/logoargprograma.component';
import { CartelComponent } from './componentes/cartel/cartel.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PiedepaginaComponent } from './componentes/piedepagina/piedepagina.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';

/* Complementos extenos */
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { LogueoComponent } from './componentes/logueo/logueo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NuevoUsuarioComponent } from './modelos/nuevo-usuario/nuevo-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LogoargprogramaComponent,
    CartelComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    PiedepaginaComponent,
    PrincipalComponent,
    LogueoComponent,
    NuevoUsuarioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
