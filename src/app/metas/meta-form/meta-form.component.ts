import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Meta } from './../../model/meta';
import { MetasService } from '../metas.service';

@Component({
  selector: 'app-meta-form',
  templateUrl: './meta-form.component.html',
  styleUrls: ['./meta-form.component.css']
})
export class MetaFormComponent implements OnInit {

  meta: any;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute,
    private metasService: MetasService) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let idMeta = params['meta'];

        this.meta = this.metasService.getMeta(idMeta);

        if (this.meta === null) {
          this.meta = {};
        }
      }
    );
  }

}
