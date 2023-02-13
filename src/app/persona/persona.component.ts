import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
 
  Resultado:number=0;

  procesResult(resultado:number){
    this.Resultado = resultado;
  }
}
