import { Component, Inject, OnInit, Optional } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators , FormControl , FormGroup} from '@angular/forms';
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
  date? ="";

  validateForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, this.checkEmail.bind(this)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  }, { validator: this.checkPasswordsMatch });
  
  constructor(
    private httpService:HttpService,
    private HttpClient:HttpClient,
    private fb: FormBuilder,
    @Optional() public dialogRef: MatDialogRef<formResetComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.httpService.get<any>(`${environment.URL_BASE}/auth/me`).subscribe((date:any) => {
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
  checkPasswordsMatch(form: FormGroup): { [key: string]: boolean } | null {
    const password = form.get('password');
    const password2 = form.get('password2');
    if (password && password2 && password.value !== password2.value) {
      password2.setErrors({ mismatch: true });
    } else {
      password2?.setErrors(null);
    }
    return null;
  }

  submitForm() {
    const data:any = {
      email : this.validateForm.value.email ?? '',
      password: this.validateForm.value.password ?? '',
      password2: this.validateForm.value.password2 ?? ''
    }
    const error = samePasswords(data.password, data.password2)
    if(error !== null){
      return
    }
    this.httpService.patch(`${environment.URL_BASE}/users/resetPassword/${this.userId}`,data).subscribe((data:any) => {
      console.log(data)
      this.date = data
    }) 
  }
  togglePasswordVisibility() {
    this.passwordVisibility = !this.passwordVisibility;
  }
  
  closeModal() {
    this.dialogRef.close();
  }
  
  getErrorMessage(input: string) {
    if (input === 'email') {
      return this.validateForm.controls['email'].hasError('required') ? 'Email requerido' :
        this.validateForm.controls['email'].hasError('email') ? 'Email invalido' :
          this.validateForm.controls['email'].hasError('checkEmail') ? 'Email incorrecto' : '';
    } else if (input === 'password') {
      return this.validateForm.controls['password'].hasError('required') ? 'Password requerido' :
        this.validateForm.controls['password'].hasError('minlength') ? 'Password inseguro' : '';
    } else if (input === 'password2') {
      return this.validateForm.controls['password2'].hasError('required') ? 'Confirme Contraseña' :
        this.validateForm.value.password !== this.validateForm.value.password2 ? 'Las Contraseñas no coinciden' : '';
    }
    return
  }
}
