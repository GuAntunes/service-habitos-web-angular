import { TarefasTestComponent } from './tarefas-test/tarefas-test.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TarefasDetalheComponent } from './tarefas-detalhe/tarefas-detalhe.component';
import { TarefasComponent } from './tarefas.component';

const TAREFAS_ROUTES: Routes = [
    {
        path: '',
        component: TarefasComponent,
        pathMatch: 'full'
    },
    {
        path: 'detalhes',
        component: TarefasDetalheComponent,
        outlet: 'secondRouter',
    },

];

@NgModule({
    imports: [RouterModule.forChild(TAREFAS_ROUTES)],
    exports: [RouterModule]
})
export class TarefasRoutingModule {

}
