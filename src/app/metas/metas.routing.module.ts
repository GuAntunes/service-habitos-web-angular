import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MetasComponent } from './metas.component';

const METAS_ROUTES: Routes = [
    {
        path: '',
        children: [
            { path: 'objetivo/:id', component: MetasComponent },
            // { path: 'novo', component: ObjetivoFormComponent },
            // {
            //     path: ':id', component: ObjetivoDetalheComponent
            // },
            // {
            //     path: ':id/editar', component: ObjetivoFormComponent
            // }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(METAS_ROUTES)],
    exports: [RouterModule]
})
export class MetasRoutingModule {

}
