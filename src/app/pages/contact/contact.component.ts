import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators , FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Alert } from 'src/app/core/interfaces/alerts.interface';
import { Transferencia } from 'src/app/core/interfaces/transferencia.interface';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { HttpService } from 'src/app/core/services/http.service';
import { Contact, User, } from 'src/app/core/state/auth/interfaces/user.interface';
import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  data?: Transferencia[];
  lista: Contact[] = [];
  addInport:boolean = false;
  addInport2:boolean = false;
  form!: FormGroup;
  dataUser!:User
  contactId?:number;
  alert : Alert = {
    err:'Error',
    msg:'',
    buttonOne:true,
    buttonTwo:false
  }

  constructor(public dialog: MatDialog,
    private httpservice: HttpService,
    private fb: FormBuilder,
    private authService : AuthService
    ) {}

    ngOnInit(): void {
        //data obtiene los contactos del local
      this.lista = this.LocalContact(this.dataUser)
      this.form = this.fb.group({
        Nombre: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
        userId: ['', [Validators.required, Validators.minLength(3)]]
      });
      this.authService.userDates().subscribe((res:any)=>{
        this.dataUser = res.id
        this.lista = this.LocalContact(this.dataUser)
      })
      
    }
    
    openDialog( alert?:any , msg?:any) {//funcion para generar el dialog de error con un msg personalizado
      this.alert.err = alert
      this.alert.msg = msg
      this.dialog.open(AlertsComponent, {
        data:this.alert
      });
    }

   
   
    LocalContact(id:any): Contact[] {//obtine los contactos de localStorage , si no existe se establece un array vacio
      const storeContacts = localStorage.getItem(`${id}`);
      return storeContacts ? JSON.parse(storeContacts) : [];
    }

    llamadaUsers(): void {//peticion get del usuario y verifica si ya esta en la base o no existe
      const name = this.form.value.Nombre;
      const userId = this.form.value.userId;
      const contacts = this.LocalContact(this.dataUser); 
      
      this.httpservice.get(`${environment.URL_BASE}/users/${userId}`).subscribe((data: any) => {
         const repeat = contacts.find((contacto: any) => 
                       contacto.name === data.first_name && contacto.userId === data.id );
        if( data.first_name === name){
          if(!repeat){
            contacts.push({ name: data.first_name, userId: userId })
            localStorage.setItem(`${this.dataUser}`, JSON.stringify(contacts))
            this.lista = contacts
          }else{
               this.openDialog("Error" , "Usario ya Registrado") 
          }      
        }else{ this.openDialog("Error" ,"Usario no Encontrado")} 
      }
    )}

    addContact(): void {
      this.llamadaUsers();
      setTimeout(() => {//cierra la ventana del form
        this.openAndClose();
      }, 500);
    }

    deleteContact(id:any){
      const contacts = this.LocalContact(this.dataUser); 
      const clear = contacts.filter((contacto: any) =>
      (this.openDialog("Listo!" , "Contacto eliminado"),
      contacto.userId !== id ? contacto : null ));
      localStorage.setItem(`${this.dataUser}`, JSON.stringify(clear))
      this.lista = clear
    }
    
    openAndClose(): void {//cierra la ventana del form
      this.addInport = !this.addInport;
    }

    openForm(id:any): void {
      this.openAndClose2()
      this.contactId = id
    }

    openAndClose2(): void {
      this.addInport2 = !this.addInport2;
    }

    finalized():void{
      this.openDialog("Listo!" ,"Transferencia Realizada")
      this.openAndClose2()
    }
  
}

 /*    this.httpservice.get(`${environment.URL_BASE}/users`).subscribe((data: any) => {
        console.log(data);
      }); */