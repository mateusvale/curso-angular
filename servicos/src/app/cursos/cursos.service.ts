import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  cursos: string[] = ["Angular", "C#"]

  getCursos(){
    console.log("getCursos chamado")
    return this.cursos;
  }
  constructor() { }

  addCursoService(curso){
    this.cursos.push(curso);
  }

}
