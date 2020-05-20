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
      nome: 'Ser um especialista em microservices',
      descricao: 'Aprender com cursos online e presenciais a programar com microserviços'
    },
    {
      id: 2,
      nome: 'Aprender um idioma',
      descricao: 'Ser capaz de entender e falar um idioma estrangeiro'
    }
  ];

  constructor() { }

  getObjetivos(): Meta[] {
    return this.metas;
  }

  getObjetivo(id: number): Objetivo {
    for (let i = 0; i < this.metas.length; i++) {
      if (this.metas[i].id == id) {
        return this.metas[i];
      }
    }
    return null;
  }
}
