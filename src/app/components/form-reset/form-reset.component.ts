import { Component, Inject, OnInit } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators , FormControl , FormGroup  } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpClient } from '@angular/common/http';
import { samePasswords } from 'src/app/core/middlewares/password.midlleware';

@Component({
  selector: 'app-form-reset',
  templateUrl: './form-reset.component.html',
  styleUrls: ['./form-reset.component.scss']
})
export class formResetComponent implements OnInit {

  passwordVisibility = false;
  password = new FormControl('');
  userId = "";
  userEmail="";

  validateForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, this.checkEmail.bind(this)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required , this.checkPassword.bind(this)]]
  });

  constructor(
    private httpService:HttpService,
    private HttpClient:HttpClient,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<formResetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.httpService.get<any>(`${environment.URL_BASE}/auth/me`).subscribe((date:any) => {
      console.log(date)
      this.userId = date.id
      this.userEmail = date.email
    })
  }
  checkEmail(control: FormControl): { [key: string]: boolean } | null  {
    if (control.value === this.userEmail) {
      return null;
    }
    return { checkEmail: true };
  }
  checkPassword(pass: FormControl): { [key: string]: boolean } | null {
    return pass.value === this.password.value
      ? null
      : { mismatch: true };
  }
   
  submitForm() {
    const data:any = {
      email : this.validateForm.value.email ?? '',
      password: this.validateForm.value.password ?? '',
      password2: this.validateForm.value.password2 ?? ''
    }
    console.log(data)

    const error = samePasswords(data.password, data.password2)

    if(error !== null){
      return
    }

    this.HttpClient.patch(`${environment.URL_BASE}/users/resetPassword/${this.userId}`,data).subscribe((date:any) => {
      console.log(date)
    }) 
  }
  
  togglePasswordVisibility() {
    this.passwordVisibility = !this.passwordVisibility;
  }
  
  closeModal() {
    this.dialogRef.close();
  }
  
  getErrorMessage(field: string) {
    if (field === 'email') {
      return this.validateForm.controls['email'].hasError('required') ? 'Email requerido' :
        this.validateForm.controls['email'].hasError('email') ? 'Email invalido' :
          this.validateForm.controls['email'].hasError('checkEmail') ? 'Email incorrecto' : '';
    } else if (field === 'password') {
      return this.validateForm.controls['password'].hasError('required') ? 'Password requerido' :
        this.validateForm.controls['password'].hasError('minlength') ? 'Password inseguro' : '';
    } else if (field === 'password2') {
      return this.validateForm.controls['password2'].hasError('required') ? 'Confirme Contraseña' :
        this.validateForm.value.password !== this.validateForm.value.password2 ? 'Las Contraseñas no coinsiden' : '';
    }
    return
  }
}
