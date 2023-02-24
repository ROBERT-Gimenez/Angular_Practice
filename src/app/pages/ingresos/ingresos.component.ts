import { Component, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/core/interfaces/transferencia.interface';
import { TransactionsService } from 'src/app/core/services/transactions.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})
export class IngresosComponent implements OnInit {

  data?: Transferencia[];

  addInport:boolean = false

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.transactionsService.getTransactions("topup").subscribe((data:any) => {
      this.data = data;
      console.log(this.data);
    })
  }

  openAndClose(){
    this.addInport = !this.addInport
  }

  addData(data:any){
    this.data?.push(data)
    console.log(data)
    this.openAndClose()
  }


}
