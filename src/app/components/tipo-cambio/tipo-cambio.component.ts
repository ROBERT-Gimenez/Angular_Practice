import { Component, OnInit} from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-tipo-cambio',
  templateUrl: './tipo-cambio.component.html',
  styleUrls: ['./tipo-cambio.component.scss']
})
export class TipoCambioComponent implements OnInit {
  
  public compra:string | undefined;
  public venta:string | undefined ;
  public tipo:string | undefined;
  
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
        console.log(res);
        this.compra = "Compra: $"+res[1].casa.compra
        this.venta = "Venta: $"+res[1].casa.venta
        this.tipo = res[1].casa.nombre
      })
    })
  }
}
