import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Objetivo } from '../../model/objetivo';
import { ObjetivosService } from './../objetivos.service';

@Component({
  selector: 'app-objetivo-detalhe',
  templateUrl: './objetivo-detalhe.component.html',
  styleUrls: ['./objetivo-detalhe.component.css'],
})
export class ObjetivoDetalheComponent implements OnInit {
  @Input() objetivo: Objetivo;
  @Output() refresh = new EventEmitter();
  
  // inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private objetivosService: ObjetivosService
  ) {}

  ngOnInit(): void {
    // this.inscricao = this.route.data.subscribe(
    //   (info: { objetivo: Objetivo }) => {
    //     this.objetivo = info.objetivo;
    //   }
    // );
  }

  editarObjetivo() {
    if (this.objetivo) {
      this.router.navigate(['objetivos', this.objetivo.id, 'editar']);
    }
  }

  deletarObjetivo(id) {
    this.objetivosService.remove(id).subscribe((success) => {
      this.refresh.emit();
    });
  }

  carregarMetas() {
    // this.router.navigate(['/metas/objetivo/', this.objetivo.id]);
  }

  // ngOnDestroy() {
  //   this.inscricao.unsubscribe();
  // }
}
