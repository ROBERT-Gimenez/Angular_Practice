
import { HttpService } from 'src/app/core/services/http.service';

import { FormComponent } from './form.component';
import { FormBuilder } from '@angular/forms';

import { empty} from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let servicio : HttpService 
  let servicioAuth : AuthService

  beforeEach( ()=>{
    servicio = new HttpService(null!);
    servicioAuth = new AuthService(null!)
    component = new FormComponent( new FormBuilder(),servicio,servicioAuth)
    component.accId =10
    component.usId  =10
    component.toId  =10
  }
  );

  it('formulario invalido con campos vacios ', ()=>{

    const espia = spyOn( servicio , 'post').and.callFake(() => {
      return empty()
    })

    const espiaAuth = spyOn( servicioAuth , 'getCuenta').and.callFake(() => {
      return empty()
    })

    component.ngOnInit()

    expect(component.form.invalid).toBeTruthy()

  })

  it('habilidar mensaje de error cuando el campo es seleccionado y esta vacio', ()=>{

    const espia = spyOn( servicio , 'post').and.callFake(() => {
      return empty()
    })

    const espiaAuth = spyOn( servicioAuth , 'getCuenta').and.callFake(() => {
      return empty()
    })

    component.ngOnInit()

    const control = component.form.get('monto')

    control?.setValue('')


    expect(control?.invalid).toBeTruthy()

  })

  it('monto no sea texto',()=>{

    const espia = spyOn( servicio , 'post').and.callFake(() => {
      return empty()
    })

    const espiaAuth = spyOn( servicioAuth , 'getCuenta').and.callFake(() => {
      return empty()
    })

    component.ngOnInit()

    const mensaje : string = 'no soy un number'
    const control = component.form.get('monto')

    control?.setValue(mensaje)
    expect(control?.invalid).toBeTruthy()
  })


  it('que se ejecute el servicio en egreso', () => {
    
    const espia = spyOn( servicio , 'post').and.callFake(() => {
      return empty()
    })

    const espiaAuth = spyOn( servicioAuth , 'getCuenta').and.callFake(() => {
      return empty()
    })

    component.ngOnInit()

    component.form.get('monto')?.setValue(500)
    component.form.get('concepto')?.setValue('tests')
    component.form.get('fecha')?.setValue('12/12/2001')
    component.form.get('idUsuario')?.setValue('7')

    component.isEgreso = true

    component.submit()

    expect( espia ).toHaveBeenCalled()
    

  });

  it('que se ejecute el servicio en ingreso', () => {
    
    const espia = spyOn( servicio , 'post').and.callFake(() => {
      return empty()
    })

    const espiaAuth = spyOn( servicioAuth , 'getCuenta').and.callFake(() => {
      return empty()
    })

    component.ngOnInit()

    component.form.get('monto')?.setValue(500)
    component.form.get('concepto')?.setValue('tests')
    component.form.get('fecha')?.setValue('12/12/2001')
    component.form.get('idUsuario')?.setValue('7')

    component.isEgreso = false

    component.submit()

    expect( espia ).toHaveBeenCalled()
    

  });


  it('que view cambie su valor',()=>{

    component.view = true

    component.close()

    expect(component.view).toBeFalse()

  })

  it('que se no se ejecute el servicio si es invalido', () => {
    
    const espia = spyOn( servicio , 'post').and.callFake(() => {
      return empty()
    })

    const espiaAuth = spyOn( servicioAuth , 'getCuenta').and.callFake(() => {
      return empty()
    })


    component.ngOnInit()

    component.form.get('monto')?.setValue('asdasdasd')
    component.form.get('fecha')?.setValue('12/12/2001')

    console.log(component.form.invalid)

    component.submit()

    expect( espia ).not.toHaveBeenCalled()
    

  });

  it('que se cree formulario ingreso',()=>{

    const espia = spyOn( servicio , 'post').and.callFake(() => {
      return empty()
    })

    const espiaAuth = spyOn( servicioAuth , 'getCuenta').and.callFake(() => {
      return empty()
    })

    component.ngOnInit()

    expect(component.form).toBeTruthy()

  })

  it('que se cree formulario egreso',()=>{

    const espia = spyOn( servicio , 'post').and.callFake(() => {
      return empty()
    })

    const espiaAuth = spyOn( servicioAuth , 'getCuenta').and.callFake(() => {
      return empty()
    })

    component.isEgreso = true
     
    component.ngOnInit()

  

    expect(component.form).toBeTruthy()

  })

});
