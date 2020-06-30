import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { Meta } from './../../model/meta';
import { ActivatedRoute, Router } from '@angular/router';
import { MetasService } from '../metas.service';

@Component({
  selector: 'app-meta-detalhe',
  templateUrl: './meta-detalhe.component.html',
  styleUrls: ['./meta-detalhe.component.css'],
})
export class MetaDetalheComponent implements OnInit {
  @Input() meta: Meta;
  @Output() refresh = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private metasService: MetasService
  ) {}

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe(
    //     (params: any) => {
    //       let metaId = params['meta'];
    //       this.meta = this.metasService.getMeta(metaId);
    //     }
    //   );
  }

  editarMeta() {
    if (this.meta) {
      this.router.navigate(['metas', this.meta.id, 'editar']);
    }
  }
}
