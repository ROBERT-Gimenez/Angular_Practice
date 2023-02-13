import { Component , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() resultadoSuma = new EventEmitter<number>()
  Elemento1:number=0;
  Elemento2:number=0;
  Suma():void{
    let res = this.Elemento1 + this.Elemento2;
    this.resultadoSuma.emit(res)
  }
}
