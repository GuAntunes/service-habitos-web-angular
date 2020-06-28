import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ObjetivoFormComponent } from './objetivo-form/objetivo-form.component';
import { ObjetivoDetalheComponent } from './objetivo-detalhe/objetivo-detalhe.component';
import { ObjetivosComponent } from './objetivos.component';
import { ObjetivoDetalheResolver } from './guard/objetivo-detalhe.resolver';

const OBJETIVOS_ROUTES: Routes = [
  {
    path: '',
    component: ObjetivosComponent,
  },
  {
    path: 'novo',
    component: ObjetivoFormComponent,
  },
  // {
  //   path: ':id',
  //   component: ObjetivoDetalheComponent,
  //   resolve: { objetivo: ObjetivoDetalheResolver },
  // },
  {
    path: ':id/editar',
    component: ObjetivoFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(OBJETIVOS_ROUTES)],
  exports: [RouterModule],
})
export class ObjetivosRoutingModule {}
