import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators , FormControl , FormGroup} from '@angular/forms';
import { clearScreenDown } from 'readline';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  data?: any = [];
  addInport:boolean = false;
  form!: FormGroup;

  constructor(private http: HttpClient,
              private httpservice:HttpService ,
              private fb: FormBuilder) {}

  ngOnInit(): void {

    this.httpservice.get(`${environment.URL_BASE}/auth/me`).subscribe((data:any)=> {
      console.log(data)
    })
    this.form = this.fb.group({
      Nombre: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
      Apellido: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
    });

  }

  openAndClose(){
    this.addInport = !this.addInport
  }

  async llamadaUsers(inicio: number, fin: number, showErrorMsg = true) {
    const headers = showErrorMsg ? new HttpHeaders() : new HttpHeaders({ 'X-Show-Error-Msg': 'false' });
    const name = this.form.value.Nombre;
    const apellido = this.form.value.Apellido;
  
    for (let i = inicio; i <= fin; i++) {
      try {
        const data = await this.http.get<any>(`${environment.URL_BASE}/users/${i}`, { headers }).toPromise();
        if (data.first_name === name && data.last_name === apellido) {
          console.log("Usuario encontrado:", data);
          this.data.push(data);
          return;
        }
      } catch (error) {
        console.log(`Error al obtener usuario con ID ${i}: ${error}`);
      }
    }
    alert("No se encontró ningún usuario.");
  }

addContact(){
  this.llamadaUsers(2930 , 2950 , false)
  setTimeout(() => {
    this.openAndClose()
  }, 500); 
}

envio(){
  alert("Envio de plata")
}

}
