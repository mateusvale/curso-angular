import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosDetalhesComponent } from './cursos-detalhes/cursos-detalhes.component';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    CursosDetalhesComponent
  ],
  exports: [
    CursosComponent,
    CursosDetalhesComponent
  ],
  providers:[
    CursosService
  ]
})
export class CursosModule { }
