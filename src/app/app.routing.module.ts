import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    {
        path: 'objetivos',
        loadChildren: () => import('./objetivos/objetivos.module').then(o => o.ObjetivosModule),
        canActivate: [AuthGuard],
        // canActivateChild: [CursosGuard],
        canLoad: [AuthGuard]
    },
    {
        path: 'metas',
        loadChildren: () => import('./metas/metas.module').then(m => m.MetasModule),
        // canActivate: [AuthGuard],
        // canActivateChild: [CursosGuard],
        // canLoad: [AuthGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: '**', component: PaginaNaoEncontradaComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
