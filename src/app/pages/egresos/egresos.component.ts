import { Component, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/core/interfaces/transferencia.interface';
import { TransactionsService } from 'src/app/core/services/transactions.service';
import { Observable } from 'rxjs';
import { Title } from 'src/app/shared/title/interfaces/title.interface';
@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['../ingresos/ingresos.component.scss']
})
export class EgresosComponent implements OnInit {

  data?: Transferencia[];


  title : any= {
    name:'Gastos'
  }
  

  addInport:boolean = false
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

  addData(data:any){
    this.data?.push(data)
    console.log(data)
    this.openAndClose()
  }

  openAndClose(){
    this.addInport = !this.addInport
  }

  pay(){
    alert("Pagar o Retirar")
  }
}