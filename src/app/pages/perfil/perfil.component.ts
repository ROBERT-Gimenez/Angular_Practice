import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/state/auth/interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { HttpService } from '../../core/services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { samePasswords } from '../../core/middlewares/password.midlleware';
import { MatDialog } from '@angular/material/dialog';
import { formResetComponent } from 'src/app/components/form-reset/form-reset.component';


const baseUrl = environment.URL_BASE
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {


//cambiar a false
  canEdit:boolean = false;

  userData :User ={
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  }
  

  userForm  = this.formBuilder.group({
    first_name : ['',Validators.required],
    last_name : ['',Validators.required],
    email : ['',Validators.required],
  })



// TODO Poner componente Loading

  constructor( private http : HttpService,
               private formBuilder : FormBuilder,
               private dialog: MatDialog) { }

  ngOnInit(): void {
    this.http.get(`${baseUrl}/auth/me`,false).subscribe(
      {
        next: (user:any) =>{
          this.userData = user
        }
      }
    )
  }

  changeEdit(){
    this.canEdit = !this.canEdit
  }

  openModal() {
    this.dialog.open(formResetComponent, {
      width: '400px',
      panelClass: 'modal_style'
    });
  }


}
