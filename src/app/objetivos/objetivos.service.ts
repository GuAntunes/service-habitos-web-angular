import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Objetivo } from '../model/objetivo';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObjetivosService {

  private readonly API = `${environment.API}/objetivos`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Objetivo[]>(this.API)
    .pipe(take(1));
  }

  findOne(id: number) {
    return this.http.get<Objetivo>(`${this.API}/${id}`)
    .pipe(take(1));
  }

  create(objetivo: Objetivo){
    return this.http.post(this.API, objetivo)
    .pipe(take(1));
  }

  private update(objetivo) {
    return this.http.put(`${this.API}/${objetivo.id}`, objetivo).pipe(take(1));
  }

  save(curso) {
    if (curso.id) {
      return this.update(curso);
    }
    return this.create(curso);
  }


  remove(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

}
