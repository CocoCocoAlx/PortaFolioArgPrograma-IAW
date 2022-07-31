import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../modelos/estudios';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
  estUrl = 'https://appiawportfolio.herokuapp.com/estudios/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Estudios[]> {
    return this.httpClient.get<Estudios[]>(this.estUrl + 'lista');
  }

  public detalle(id: number): Observable<Estudios>{
    return this.httpClient.get<Estudios>(this.estUrl + `detalle/${id}`);
  }

  public save(estudios: Estudios):Observable<any>{
    return this.httpClient.post<any>(this.estUrl+'crear', estudios);
  }

  public actualizar(id: number, estudios: Estudios): Observable<any>{
    return this.httpClient.put<any>(this.estUrl+`actualizar/${id}`, estudios);
  }

  public borrar(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.estUrl+`borrar/${id}`);
  }
}
