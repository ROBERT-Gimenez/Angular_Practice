import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { login } from 'src/app/core/state/auth/auth.actions';
import { User } from 'src/app/core/state/auth/interfaces/user.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public emailInvalid = false;
  public passwordInvalid = false;
  invalidEmailOrPassword = false;
  user! : User;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb : FormBuilder,
              private loginService : AuthService,
              private router: Router,
              private store: Store) {}

  ngOnInit(): void {
  }


  login(){
    const user: User = {
      email : this.loginForm.value.email ?? '',
      password: this.loginForm.value.password ?? ''
    }
    this.setUserData();
    this.store.dispatch(login({user}));
  }

  setUserData(){
    this.loginService.login(this.loginForm).subscribe({
      next:(res:any) =>{
        localStorage.setItem('token',res.accessToken)
        let id!:number
        this.loginService.userDates().subscribe((res:any)=>{id = res.id; console.log(id)})
        this.loginService.getCuenta().subscribe(
          (res:any)=>{
            if(res.length == 0){
              console.log(res)
              this.loginService.crearCuenta(id).subscribe(res=>{console.log(res)})
              this.router.navigateByUrl('/dashboard/home')
            
                    
            }else{
              this.router.navigateByUrl('/dashboard/home')
            }
          })

    
       
      },
      error: err =>{console.log(err)
      this.invalidEmailOrPassword = true;

      }
    })

  }
}