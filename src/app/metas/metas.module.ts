import { MetasService } from './metas.service';
import { MetasComponent } from './metas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MetasRoutingModule } from './metas.routing.module';
import { MetaDetalheComponent } from './meta-detalhe/meta-detalhe.component';
import { MetaFormComponent } from './meta-form/meta-form.component';



@NgModule({
  declarations: [MetasComponent, MetaDetalheComponent, MetaFormComponent],
  imports: [
    CommonModule,
    MetasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MetasService]
})
export class MetasModule { }
