
import { HttpService } from 'src/app/core/services/http.service';

import { FormComponent } from './form.component';
import { FormBuilder } from '@angular/forms';

import { empty} from 'rxjs';

describe('FormComponent', () => {
  let component: FormComponent;
  let servicio : HttpService 

  beforeEach( ()=>{
    servicio = new HttpService(null!);
    component = new FormComponent( new FormBuilder(),servicio)
  }
  );

  it('formulario invalido con campos vacios ', ()=>{

    expect(component.form.invalid).toBeTruthy()

  })

  it('habilidar mensaje de error cuando el campo es seleccionado y esta vacio', ()=>{
    const control = component.form.get('monto')

    control?.setValue('')


    expect(control?.invalid).toBeTruthy()

  })

  it('monto no sea texto',()=>{

    const mensaje : string = 'no soy un number'
    const control = component.form.get('monto')

    control?.setValue(mensaje)
    expect(control?.invalid).toBeTruthy()
  })


  it('que se ejecute el servicio', () => {
    
    const espia = spyOn( servicio , 'post').and.callFake(() => {
      return empty()
    })

    component.ngOnInit()

    component.form.get('monto')?.setValue(500)
    component.form.get('concepto')?.setValue('tests')
    component.form.get('fecha')?.setValue('12/12/2001')

    component.submit()

    expect( espia ).toHaveBeenCalled()
    

  });

  it('que se no se ejecute el servicio si es invalido', () => {
    
    const espia = spyOn( servicio , 'post').and.callFake(() => {
      return empty()
    })

    component.ngOnInit()

    component.form.get('monto')?.setValue('asdasdasd')
    component.form.get('concepto')?.setValue('tests')
    component.form.get('fecha')?.setValue('12/12/2001')

    component.submit()

    expect( espia ).not.toHaveBeenCalled()
    

  });

});
