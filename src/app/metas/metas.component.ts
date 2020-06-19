import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Objetivo } from './../model/objetivo';
import { ObjetivosService } from '../objetivos/objetivos.service';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent implements OnInit {

  objetivo: Objetivo;
  inscricao: Subscription;
  submenu: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private objetivosService: ObjetivosService) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
        (params: any) => {
          let id = params['id'];
  
          // this.objetivo = this.objetivosService.getObjetivo(id);

        }
      );
  }

  carregarMeta(metaId, objetivoId){
    this.router.navigate(['/metas/objetivo/', objetivoId, 'meta', metaId, 'editar']);
    this.submenu = true;
  }
}
