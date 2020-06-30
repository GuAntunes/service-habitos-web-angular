import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { Objetivo } from './../model/objetivo';
import { ObjetivosService } from '../objetivos/objetivos.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent implements OnInit {

  objetivo$: Observable<Objetivo>;
  inscricao: Subscription;
  submenu: boolean;
  currentMeta: Meta;
  currentIndex: number;
  objetivoId: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private objetivosService: ObjetivosService) { }

  ngOnInit(): void {
    const objetivoId: string = this.route.snapshot.queryParamMap.get('objetivo');
    this.objetivo$ = this.objetivosService.findOne(Number(objetivoId));
    this.objetivoId = objetivoId;
  }

  setActiveMeta(meta, index) {
    this.currentMeta = meta;
    this.currentIndex = index;
  }

  novaMeta(): void {
    if(this.objetivoId){
      this.router.navigate(['metas/novo'], { queryParams: { objetivo: this.objetivoId } });
    }
  }
}
