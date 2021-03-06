import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor : number = 0; 

  //classe que emite valores
  @Output() mudouValor = new EventEmitter();
  
  increment(){
    this.valor++;
    this.mudouValor.emit( {novoValor : this.valor} );
  }

  decrement(){
    this.valor--;
    this.mudouValor.emit( {novoValor : this.valor} );
  }

  
  
  constructor() { }

  ngOnInit() {
  }

}
