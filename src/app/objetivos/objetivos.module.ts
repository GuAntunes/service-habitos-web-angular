import { ObjetivosComponent } from './objetivos.component';
import { ObjetivosRoutingModule } from './objetivos.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjetivoDetalheComponent } from './objetivo-detalhe/objetivo-detalhe.component';
import { ObjetivoFormComponent } from './objetivo-form/objetivo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ObjetivoDetalheComponent, ObjetivoFormComponent, ObjetivosComponent],
  imports: [
    CommonModule,
    ObjetivosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ObjetivosModule { }
