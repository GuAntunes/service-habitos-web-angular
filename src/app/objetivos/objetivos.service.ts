import { Objetivo } from '../model/objetivo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjetivosService {

  private objetivos: Objetivo[] = [
    {
      id: 1,
      nome: 'Ser um especialista em microservices',
      descricao: 'Aprender com cursos online e presenciais a programar com microserviços',
      metas: [
        {
          id: 1,
          nome: 'Meta 01',
          descricao: 'Fazer Cursos Online',
        }
      ]
    },
    {
      id: 2,
      nome: 'Aprender um idioma',
      descricao: 'Ser capaz de entender e falar um idioma estrangeiro'
    }
  ];

  constructor() { }

  getObjetivos(): Objetivo[] {
    return this.objetivos;
  }

  getObjetivo(id: number): Objetivo {
    for (let i = 0; i < this.objetivos.length; i++) {
      if (this.objetivos[i].id == id) {
        return this.objetivos[i];
      }
    }
    return null;
  }
}
