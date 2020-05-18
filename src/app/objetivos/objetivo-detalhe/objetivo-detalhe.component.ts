import { ObjetivosService } from './../objetivos.service';
import { Component, OnInit } from '@angular/core';
import { Objetivo } from '../objetivo';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-objetivo-detalhe',
  templateUrl: './objetivo-detalhe.component.html',
  styleUrls: ['./objetivo-detalhe.component.css']
})
export class ObjetivoDetalheComponent implements OnInit {
  
  objetivo: Objetivo;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private objetivosService: ObjetivosService) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
        (params: any) => {
          let id = params['id'];
  
          this.objetivo = this.objetivosService.getObjetivo(id);
        }
      );
  }

  editarObjetivo(){
    this.router.navigate(['/objetivos', this.objetivo.id, 'editar'])
  }

}
