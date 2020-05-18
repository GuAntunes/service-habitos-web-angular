import { HomeComponent } from './home/home.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    {
        path: 'objetivos',
        loadChildren: () => import('./objetivos/objetivos.module').then(o => o.ObjetivosModule),
        // canActivate: [AuthGuard],
        // canActivateChild: [CursosGuard],
        // canLoad: [AuthGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        // canActivate: [AuthGuard]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: '**', component: PaginaNaoEncontradaComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
