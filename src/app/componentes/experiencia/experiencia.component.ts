import { Component, OnInit } from '@angular/core';
import { Experiencialab } from 'src/app/modelos/experiencialab';
import { ExpServicioService } from 'src/app/servicio/exp-servicio.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  exp: Experiencialab[] = [];

  constructor(private experienciaServicio: ExpServicioService, private tokenServicio: TokenService) { }

  isLogged=false;

  ngOnInit(): void {
    this.cargarExperiencia();

    if(this.tokenServicio.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }
  }

  cargarExperiencia():void{
    this.experienciaServicio.lista().subscribe(data => {
      this.exp = data;})
  }

  borrar(id?: number){
    if(id != undefined){
    this.experienciaServicio.borrar(id).subscribe(
      data => {
        alert("Se borró la experiencia");
        window.location.reload();
      }, err => {
        alert("Error");
    })
  }
  }
}

