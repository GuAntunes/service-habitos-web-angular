import { Meta } from './../model/meta';
import { Objetivo } from '../model/objetivo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetasService {

  private metas: Meta[] = [
    {
      id: 1,
      nome: 'Realizar um curso na Udemy',
      descricao: 'Realizar o curso X',
      objetivo: 1
    },
    {
      id: 2,
      nome: 'Realizar um curso presencial na Caelum',
      descricao: 'Realizar um curso presencial sobre o assunto',
      objetivo: 1
    }
  ];

  constructor() { }

  getMetas(idObjetivo: number): Meta[] {
    let retorno: Meta[] = [];
    for (let i = 0; i < this.metas.length; i++) {
      if (this.metas[i].objetivo == idObjetivo) {
        retorno.push(this.metas[i]);
      }
    }
    return retorno;
  }

  getMeta(id: number): Meta {
    for (let i = 0; i < this.metas.length; i++) {
      if (this.metas[i].id == id) {
        return this.metas[i];
      }
    }
    return null;
  }
}
