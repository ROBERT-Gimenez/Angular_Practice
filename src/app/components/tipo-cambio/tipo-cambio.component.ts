import { Component, OnInit, } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-tipo-cambio',
  templateUrl: './tipo-cambio.component.html',
  styleUrls: ['./tipo-cambio.component.scss']
})
export class TipoCambioComponent implements OnInit {
  
  compra !:number
  venta!:number
  tipo!:string
  data!: any;
  constructor(private http: HttpService) { 

  }

  ngOnInit(): void {
   this.get()
  }

  public get(){
    // this.http.get('https://www.dolarsi.co/api.php?type=valoresprincipales').subscribe({
    //   next: (data:any)=>{
    //     console.log(data.status)
        
    //   }
    // })
    fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then((data) => {
      data.json()
      .then(res =>{ 
        this.data = res
        this.compra = res[1].casa.compra

        this.venta =res[1].casa.venta
   
        this.tipo =res[1].casa.nombre
      })
    })
  }
}
