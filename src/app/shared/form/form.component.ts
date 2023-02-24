import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { HttpService } from '../../core/services/http.service';
import { Transferencia } from '../../core/interfaces/transferencia.interface';
import { AuthService } from 'src/app/core/services/auth/auth.service';



const baseUrl = environment.URL_BASE

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input()
  isEdition: boolean = false;

  @Input() isTransf: boolean=false

  @Input() isEgreso: boolean = false;
  @Input()
  // formValues?: FormGroup;

  @Input()
  view: boolean = false

  @Input() type: 'topup' | 'payment' = 'topup'

  @Output() data: EventEmitter<Transferencia> = new EventEmitter()

  @Output() onClose: EventEmitter<boolean> = new EventEmitter()

  

  accId!: number;
  usId!: number;
  toId!: number

  body! : any

  form!: FormGroup;

  constructor(private fb: FormBuilder, private httpService: HttpService, private authS: AuthService) { }

  ngOnInit(): void {

    if(this.isEgreso) {
      this.createFormEgreso()
    }else{ //si no es egreso queda el formulario para un ingreso
      this. createFormIngreso()
    }

    // asignamos los id de la cuenta (la primer cuenta) del usuario que esta logueado
    this.authS.getCuenta().subscribe((res: any) => {
      this.accId = res[0].id
      this.toId = res[0].id
      this.usId = res[0].userId
    })

  }


  submit() {

    if(this.form.invalid) return 

        
    this.createBody()

      if (this.isEgreso ||this.isTransf) {
        this.httpService.post<Transferencia>(`${baseUrl}/transactions`, this.body, false).subscribe(resp => this.data.emit(resp)) 
        this.httpService.post<any>(`${baseUrl}/accounts/${this.form.get('idUsuario')?.value}`, {
            "type": "payment",
            "concept": this.form.get('concepto')?.value,
            "amount": this.form.get('monto')?.value
        }, false).subscribe(resp => this.data.emit(resp)) 
      }else{
        this.httpService.post<Transferencia>(`${baseUrl}/transactions`, this.body, false).subscribe(resp => this.data.emit(resp))
        this.httpService.post<any>(`${baseUrl}/fixeddeposits`, {

          "userId": this.usId,
          "accountId": this.accId,
          "amount": this.form.get('monto')?.value,
          "creation_date": "2022-10-26",
          "closing_date": "2022-11-26"
          
        })

      }
  
  }

  createBody(){
    this.body = {
      amount: this.form.get('monto')?.value,
      concept: this.form.get('concepto')?.value,
      date: this.form.get('fecha')?.value,
      type: this.type,
      accountId: this.accId,
      userId: this.usId,
      to_account_id: this.form.get('idUsuario')?.value || this.toId
    }
  }

  createFormEgreso(){
    this.form = this.fb.group({
      monto: [{ value: 0, disabled: this.isEdition }, [Validators.required, Validators.min(1),Validators.pattern("^[0-9]*$")]],
      concepto: ['', [Validators.required]],
      fecha: [{ value: moment().format('DD/MM/YYYY'), disabled: this.isEdition }, [Validators.required]],
      idUsuario: ['', [Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")]]
    });
  }

  createFormIngreso(){
    this.form =  this.fb.group({
      monto: [{ value: 0, disabled: this.isEdition }, [Validators.required, Validators.min(1),Validators.pattern("^[0-9]*$")]],
      concepto: ['', [Validators.required]],
      fecha: [{ value: moment().format('DD/MM/YYYY'), disabled: this.isEdition }, [Validators.required]]
    });
  }

  close() {
    this.view = !this.view
    this.onClose.emit(this.view)
  }



}


