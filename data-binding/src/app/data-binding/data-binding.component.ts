import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  ClickMe(){
    alert("Clicked button");
  }

  valorAtual : string = '';
  valorSalvo : string = '';
  onMouseOver : boolean = false;

  name : string = "abc";

  nomeDoCurso : string = "Angular";

  person : any =  {
    name : "Mateus",
    age : 25
  }

  valorInicial : number = 10;

  onKeyUp(event : KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  saveValue(value){
    this.valorSalvo = value;
  }

  onMouseOverOut(){
    this.onMouseOver = !this.onMouseOver;
  }

  valor : number = 0;
  onMudouValor(evento){
    console.log(evento.novoValor);
    this.valor = evento.novoValor;
  }

  constructor() { }

  ngOnInit() {
  }

}
