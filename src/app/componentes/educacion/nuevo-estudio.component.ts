import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/modelos/estudios';
import { EstudiosService } from 'src/app/servicio/estudios.service';

@Component({
  selector: 'app-nuevo-estudio',
  templateUrl: './nuevo-estudio.component.html',
  styleUrls: ['./nuevo-estudio.component.css']
})
export class NuevoEstudioComponent implements OnInit {
  nombreEst: string = '';
  detalleEst: string = '';

  constructor(private estudioServicio: EstudiosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const exp=new Estudios(this.nombreEst, this.detalleEst);
    this.estudioServicio.save(exp).subscribe(data => {
      alert("Estudios cargados");
      this.router.navigate(['/principal']);
    }, err => {
      this.router.navigate(['/principal']);
    })
  }

}
