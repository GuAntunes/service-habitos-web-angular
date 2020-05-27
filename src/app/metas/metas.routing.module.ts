import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MetaFormComponent } from './meta-form/meta-form.component';
import { MetaDetalheComponent } from './meta-detalhe/meta-detalhe.component';
import { MetasComponent } from './metas.component';

const METAS_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'objetivo/:id', component: MetasComponent,
                children: [
                    {
                        path: 'meta/:meta', component: MetaDetalheComponent
                    },
                    {
                        path: 'meta/:meta/editar', component: MetaFormComponent
                    },
                    { path: 'novo', component: MetaFormComponent }
                ]
            },
            {
                path: ':id', component: MetaDetalheComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(METAS_ROUTES)],
    exports: [RouterModule]
})
export class MetasRoutingModule {

}
