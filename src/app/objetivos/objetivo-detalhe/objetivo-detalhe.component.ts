import { ObjetivosService } from './../objetivos.service';
import { Component, OnInit } from '@angular/core';
import { Objetivo } from '../../model/objetivo';
import { Subscription, Observer, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-objetivo-detalhe',
  templateUrl: './objetivo-detalhe.component.html',
  styleUrls: ['./objetivo-detalhe.component.css']
})
export class ObjetivoDetalheComponent implements OnInit {
  
  objetivo$: Observable<Objetivo>;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private objetivosService: ObjetivosService) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
        (params: any) => {
          let id = params['id'];
  
          this.objetivo$ = this.objetivosService.findOne(id);
        }
      );
  }

  editarObjetivo(){
    this.router.navigate(['editar'], { relativeTo: this.route });
  }

  deletarObjetivo(id){
    console.log(id);
    this.objetivosService.remove(id);
  }

  carregarMetas(){
    // this.router.navigate(['/metas/objetivo/', this.objetivo.id]);
  }

}
