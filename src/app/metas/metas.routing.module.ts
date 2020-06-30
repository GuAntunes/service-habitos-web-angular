import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MetasComponent } from './metas.component';
import { MetaFormComponent } from './meta-form/meta-form.component';

const METAS_ROUTES: Routes = [
  {
    path: '',
    component: MetasComponent,
  },
  {
    path: ':id/editar',
    component: MetaFormComponent,
  },
  { path: 'novo', component: MetaFormComponent },
//   {
//     path: 'meta/:meta',
//     component: MetaDetalheComponent,
//   },
//   {
//     path: ':id',
//     component: MetaDetalheComponent,
//   },
];

@NgModule({
  imports: [RouterModule.forChild(METAS_ROUTES)],
  exports: [RouterModule],
})
export class MetasRoutingModule {}
