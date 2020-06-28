import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Objetivo } from '../model/objetivo';
import { ObjetivosService } from './objetivos.service';

@Component({
  selector: 'app-objetivos',
  templateUrl: './objetivos.component.html',
  styleUrls: ['./objetivos.component.css'],
})
export class ObjetivosComponent implements OnInit {
  objetivos$: Observable<Objetivo[]>;
  currentObjetivo: Objetivo;
  currentIndex: number = -1;

  constructor(
    private objetivosService: ObjetivosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listarObjetivos();
  }

  listarObjetivos() {
    this.objetivos$ = this.objetivosService.list();
  }

  setActiveObjetivo(objetivo, index) {
    this.currentObjetivo = objetivo;
    this.currentIndex = index;
  }
}
