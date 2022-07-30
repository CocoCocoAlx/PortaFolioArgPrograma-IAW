import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../modelos/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  proyUrl = 'http://localhost:8080/proyectos/'

  constructor(private httpClient: HttpClient) { }
    
    public lista(): Observable<Proyectos[]>{
      return this.httpClient.get<Proyectos[]>(this.proyUrl + 'lista');
    }

    public detalle(id:number): Observable<Proyectos>{
      return this.httpClient.get<Proyectos>(this.proyUrl + `detalle/${id}`);
    }

    public save(proyectos: Proyectos):Observable<any>{
      return this.httpClient.post<any>(this.proyUrl+'crear',proyectos);
    }

    public borrar(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.proyUrl+`borrar/${id}`);
    }
}
