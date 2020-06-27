import { ObjetivosService } from '../objetivos.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Objetivo } from 'src/app/model/objetivo';


@Injectable()
export class ObjetivoDetalheResolver implements Resolve<Objetivo> {

    constructor(private service: ObjetivosService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {

            console.log('ObjetivoDetalheResolver');

            let id = route.params['id'];
            
            return this.service.findOne(id);
    }
}