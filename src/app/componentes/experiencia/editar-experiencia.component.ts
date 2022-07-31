import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencialab } from 'src/app/modelos/experiencialab';
import { ExpServicioService } from 'src/app/servicio/exp-servicio.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  exp: Experiencialab = null;

  constructor(private experienciaServicio: ExpServicioService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaServicio.detalle(id).subscribe(
      data => {
        this.exp = data;
      }, err => {
        this.router.navigate(['/principal']);
      }
    )

  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaServicio.actualizar(id, this.exp).subscribe(data => {
      alert("Experiencia actualizada");
      this.router.navigate(['/principal']);
    }, err => {
      alert("Error al modificar experiencia")
      this.router.navigate(['/principal']);
    })
  }
  }
