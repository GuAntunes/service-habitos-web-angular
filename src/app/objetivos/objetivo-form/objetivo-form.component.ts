import { ObjetivosService } from './../objetivos.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Objetivo } from '../../model/objetivo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objetivo-form',
  templateUrl: './objetivo-form.component.html',
  styleUrls: ['./objetivo-form.component.css']
})
export class ObjetivoFormComponent implements OnInit {

  objetivo: Objetivo;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute,
    private objetivoService: ObjetivosService) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.objetivo = this.objetivoService.getObjetivo(id);

        if(this.objetivo === null){
          this.objetivo = {};
        }
      }
    );
  }

}
