import { ObjetivosRoutingModule } from './objetivos.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjetivoDetalheComponent } from './objetivo-detalhe/objetivo-detalhe.component';
import { ObjetivoFormComponent } from './objetivo-form/objetivo-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ObjetivoDetalheComponent, ObjetivoFormComponent],
  imports: [
    CommonModule,
    ObjetivosRoutingModule,
    FormsModule
  ]
})
export class ObjetivosModule { }
