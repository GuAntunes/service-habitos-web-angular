import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { Meta } from '../model/meta';

@Injectable({
  providedIn: 'root'
})
export class MetasService {

  private readonly API = `${environment.API}/metas`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Meta[]>(this.API)
    .pipe(take(1));
  }

  findOne(id: number) {
    return this.http.get<Meta>(`${this.API}/${id}`)
    .pipe(take(1));
  }

  create(meta: Meta){
    return this.http.post(this.API, meta)
    .pipe(take(1));
  }

  private update(meta) {
    return this.http.patch(`${this.API}/${meta.id}`, meta).pipe(take(1));
  }

  save(meta) {
    if (meta.id) {
      return this.update(meta);
    }
    return this.create(meta);
  }


  remove(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
