import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../modelos/persona.modelo';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  baseurl = 'https://appiawportfolio.herokuapp.com/personas/'

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.baseurl+'ver')
  } 
}
