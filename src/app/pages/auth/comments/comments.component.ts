import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  personas =[
    {
      nombre:'Martin Cordoba',
      comentario: 'Excelente aplicación. Me ha sido te mucha utilidad a la hora de hacer transacciones ya que es al instante y seguro',
      pic:'https://cdn-icons-png.flaticon.com/512/3795/3795330.png'
    },
    {
      nombre:'Maria Suarez',
      comentario: 'Me encanta!!! Muy sencillo y práctico para realizar cualquier movimiento de dinero, rapido y efectivo',
      pic:'https://cdn-icons-png.flaticon.com/512/3795/3795330.png'
    },
    {
      nombre:'Silvia Torres',
      comentario: 'Excelente aplicacion de billetera virtual, las secciones tienen un tono precioso, son faciles de entender y muy sencillos de usar, recomendadisimo',
      pic:'https://cdn-icons-png.flaticon.com/512/3795/3795330.png'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
