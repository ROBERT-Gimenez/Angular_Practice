import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  title = 'registro';
  canLook:boolean = false

  registroForm = this.fb.group({
    first_name:['',Validators.required],
    last_name:['',Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    roleId:[1],
    points:[0],
    terms:[false, Validators.requiredTrue]
  });

  constructor(private fb: FormBuilder,private router:Router,private registerService:AuthService) { }
  ngOnInit(): void {
  }
  invalidEmailOrPassword = false;
  register(){
    this.registerService.register(this.registroForm).subscribe(
    {
      next:(res:any) =>{
        this.router.navigateByUrl('/login')
        
      },
      error: (err:any)=>{
          console.log(err.error)

          this.invalidEmailOrPassword = true;
        
      } }
    )
  }

  public onSubmit() {
    if (!this.registroForm.valid) {
      Object.values(this.registroForm.controls).forEach(control => {
        control.markAllAsTouched();
      })
    } 
  }

  viewTerms(){
    this.canLook = !this.canLook
  }

  canSubmit(){
    return this.registroForm.valid
  }

}
