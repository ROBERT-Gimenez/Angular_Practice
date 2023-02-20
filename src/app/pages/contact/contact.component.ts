import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/core/interfaces/transferencia.interface';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  data?: Transferencia[];

  addInport:boolean = false

  constructor(private http: HttpClient,
    private httpservice:HttpService ) {}

  ngOnInit(): void {
    this.httpservice.get(`${environment.URL_BASE}/auth/me`).subscribe((data:any)=> {
      console.log(data)
    })
    this.llamadaUsers(2930 , 2940 , false)
 
  }

  openAndClose(){
    this.addInport = !this.addInport
  }

  editConcepto(){
    alert("editar concepto")
  }

  addData(data:any){
    this.data?.push(data)
    console.log(data)
    this.openAndClose()
  }

  llamadaUsers(inicio: any, fin: any, showErrorMsg: boolean = true) {
  const headers = showErrorMsg ? new HttpHeaders() : new HttpHeaders({ 'X-Show-Error-Msg': 'false' });

  for (let i = inicio; i <= fin; i++) {
    this.http.get<any>(`${environment.URL_BASE}/users/${i}`, { headers: headers }).subscribe(
      (data: any) => {
        console.log(data?.id ? data : `No se encontró un usuario con la ID ${i}`);
      },
      (error: any) => {
        console.error(`Error al obtener usuario con ID ${i}: ${error.message}`);
      }
    );
  }
}

}
