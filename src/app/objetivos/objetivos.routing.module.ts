import { ObjetivoFormComponent } from './objetivo-form/objetivo-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ObjetivoDetalheComponent } from './objetivo-detalhe/objetivo-detalhe.component';
import { ObjetivosComponent } from './objetivos.component';

const OBJETIVOS_ROUTES: Routes = [
    {
        path: '', component: ObjetivosComponent,
        children: [
            { path: 'novo', component: ObjetivoFormComponent },
            {
                path: ':id', component: ObjetivoDetalheComponent
            },
            {
                path: ':id/editar', component: ObjetivoFormComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(OBJETIVOS_ROUTES)],
    exports: [RouterModule]
})
export class ObjetivosRoutingModule {

}
