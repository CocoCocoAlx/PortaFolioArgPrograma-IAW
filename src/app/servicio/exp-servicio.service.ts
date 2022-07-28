import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencialab } from '../modelos/experiencialab';

@Injectable({
  providedIn: 'root'
})
export class ExpServicioService {
  expUrl = 'http://localhost:8080/experiencialab/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencialab[]> {
    return this.httpClient.get<Experiencialab[]>(this.expUrl + 'lista');
  }

  public detalle(id: number): Observable<Experiencialab>{
    return this.httpClient.get<Experiencialab>(this.expUrl + `/detalle/${id}`);
  }

  public save(experiencia: Experiencialab):Observable<any>{
    return this.httpClient.post<any>(this.expUrl+'crear', experiencia);
  }

  public actualizar(id: number, experiencia: Experiencialab): Observable<any>{
    return this.httpClient.post<any>(this.httpClient+`actualizar/${id}`, experiencia);
  }

  public borrar(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expUrl+`borrar/${id}`);
  }
}
