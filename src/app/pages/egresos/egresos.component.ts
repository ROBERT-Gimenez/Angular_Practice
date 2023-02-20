import { Component, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/core/interfaces/transferencia.interface';
import { TransactionsService } from 'src/app/core/services/transactions.service';
@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['../ingresos/ingresos.component.scss']
})
export class EgresosComponent implements OnInit {

  data?: Transferencia[];

  constructor(private transactionsService: TransactionsService ) {}

  ngOnInit(): void {
    this.transactionsService.getTransactions("payment").subscribe((data:any) => {
      this.data = data;
      console.log(this.data);
    }, (error:any) => {
      console.error(error);
    });
  }

  editConcepto(){
    alert("editar concepto")
  }

  pay(){
    alert("Pagar o Retirar")
  }
}