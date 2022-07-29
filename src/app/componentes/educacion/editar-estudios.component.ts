import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudios } from 'src/app/modelos/estudios';
import { EstudiosService } from 'src/app/servicio/estudios.service';

@Component({
  selector: 'app-editar-estudios',
  templateUrl: './editar-estudios.component.html',
  styleUrls: ['./editar-estudios.component.css']
})
export class EditarEstudiosComponent implements OnInit {
  est: Estudios = null;

  constructor(private estudiosServicio: EstudiosService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.estudiosServicio.detalle(id).subscribe(
      data => {
        this.est = data;
      }, err => {
        alert("Error al modificar estudios")
        this.router.navigate(['/principal']);
      }
    )

  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.estudiosServicio.actualizar(id, this.est).subscribe(data => {
      alert("Estudios actualizados");
      this.router.navigate(['/principal']);
    }, err => {
      this.router.navigate(['/principal']);
    })
  }
  }
