import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/modelos/estudios';
import { EstudiosService } from 'src/app/servicio/estudios.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  est: Estudios[] = [];

  constructor(private estudioServicio: EstudiosService, private tokenServicio: TokenService) { }

  isLogged=false;

  ngOnInit(): void {
    this.cargarEstudios();

    if(this.tokenServicio.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }
  }

  cargarEstudios():void{
    this.estudioServicio.lista().subscribe(data => {
      this.est = data;})
  }

  borrar(id?: number){
    if(id != undefined){
    this.estudioServicio.borrar(id).subscribe(
      data => {
        alert("Se borró la información de estudios");
        window.location.reload();
      }, err => {
        alert("Error");
    })
  }
  }
}

