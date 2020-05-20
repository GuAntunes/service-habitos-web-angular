import { MetasService } from './metas.service';
import { MetasComponent } from './metas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MetasRoutingModule } from './metas.routing.module';



@NgModule({
  declarations: [MetasComponent],
  imports: [
    CommonModule,
    MetasRoutingModule,
    FormsModule
  ],
  providers: [MetasService]
})
export class MetasModule { }
