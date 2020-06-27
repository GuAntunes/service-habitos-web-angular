import { ObjetivosService } from './../objetivos.service';
import { Component, OnInit } from '@angular/core';
import { Objetivo } from '../../model/objetivo';
import { Subscription, Observer, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-objetivo-detalhe',
  templateUrl: './objetivo-detalhe.component.html',
  styleUrls: ['./objetivo-detalhe.component.css'],
})
export class ObjetivoDetalheComponent implements OnInit {
  objetivo: Objetivo;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private objetivosService: ObjetivosService
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.data.subscribe(
      (info: { objetivo: Objetivo }) => {
        this.objetivo = info.objetivo;
      }
    );
  }

  editarObjetivo() {
    this.router.navigate(['editar'], { relativeTo: this.route });
  }

  deletarObjetivo(id) {
    this.objetivosService.remove(id).subscribe((success) => {
      // this.onRefresh();
    });
  }

  carregarMetas() {
    // this.router.navigate(['/metas/objetivo/', this.objetivo.id]);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
