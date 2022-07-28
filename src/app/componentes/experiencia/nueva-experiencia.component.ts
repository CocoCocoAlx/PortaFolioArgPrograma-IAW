import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencialab } from 'src/app/modelos/experiencialab';
import { ExpServicioService } from 'src/app/servicio/exp-servicio.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
  nombreExp: string = '';
  detalleExp: string = '';

  constructor(private experienciaServicio: ExpServicioService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const exp=new Experiencialab(this.nombreExp, this.detalleExp);
    this.experienciaServicio.save(exp).subscribe(data => {
      alert("Experiencia cargada");
      this.router.navigate(['/principal']);
    }, err => {
      this.router.navigate(['/principal']);
    })
  }

}
