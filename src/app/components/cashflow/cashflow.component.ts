import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cashflow',
  templateUrl: './cashflow.component.html',
  styleUrls: ['./cashflow.component.scss']
})
export class CashflowComponent implements OnInit {

  @Input() title : string = "Añadir gastos"
  constructor() { }

  ngOnInit(): void {
  }

}
