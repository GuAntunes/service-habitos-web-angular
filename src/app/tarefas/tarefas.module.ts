import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TarefasComponent } from './tarefas.component';
import { TarefasDetalheComponent } from './tarefas-detalhe/tarefas-detalhe.component';
import { TarefasTestComponent } from './tarefas-test/tarefas-test.component';
import { TarefasRoutingModule } from './tarefas.routing.module';


@NgModule({
  declarations: [TarefasComponent, TarefasDetalheComponent, TarefasTestComponent],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    FormsModule
  ]
})
export class TarefasModule { }
