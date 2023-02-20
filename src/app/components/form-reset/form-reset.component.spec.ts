import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { formResetComponent } from './form-reset.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';


describe('Test Formulario de Contraseña', () => {
  let component: formResetComponent;
  let fixture: ComponentFixture<formResetComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let httpService: HttpService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, ReactiveFormsModule,
                  BrowserDynamicTestingModule,MatDialogModule,],
        providers: [
                    {provide: MatDialogRef, useValue: {}},
                    {provide: MAT_DIALOG_DATA, useValue: []},
                    HttpService
                  ],
        declarations: [ formResetComponent ]
      }).compileComponents();

      fixture = TestBed.createComponent(formResetComponent);
      component = fixture.componentInstance;
      httpService = TestBed.inject(HttpService);
      fixture.detectChanges();
  });
  

  it('Se crea correctamente el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Formulario invalido' , () => {
    const fixture = TestBed.createComponent(formResetComponent);
    const component = fixture.componentInstance
    fixture.detectChanges()

    component.validateForm.value.email=['juanperez@example.com'],
    component.validateForm.value.password = ''
    component.validateForm.value.email = ''
    
    expect(component.validateForm.invalid).toBeTrue();
  })

  it('El botón de enviar debe estar deshabilitado si el campo de email está vacío', () => {
    const fixture = TestBed.createComponent(formResetComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
  
    const emailControl = component.validateForm.controls['email'];
    emailControl.setValue('');
    emailControl.markAsTouched();
  
    const btnElement = fixture.debugElement.query(By.css('button.btn_submit'));
    expect(btnElement.nativeElement.disabled).toBeTrue();
  });

  it('El botón de enviar debe estar deshabilitado si el campo de email contiene una dirección de correo electrónico invalido', () => {
    const fixture = TestBed.createComponent(formResetComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
  
    const emailControl = component.validateForm.controls['email'];
    emailControl.setValue('correo-invalido');
    emailControl.markAsTouched();
  
    const btnElement = fixture.debugElement.query(By.css('button.btn_submit'));
    expect(btnElement.nativeElement.disabled).toBeTrue();
  });

  it('El botón de enviar debe estar deshabilitado si el campo de contraseña está vacío', () => {
    const fixture = TestBed.createComponent(formResetComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
  
    const passwordControl = component.validateForm.controls['password'];
    passwordControl.setValue('');
    passwordControl.markAsTouched();
  
    const btnElement = fixture.debugElement.query(By.css('button.btn_submit'));
    expect(btnElement.nativeElement.disabled).toBeTrue();
  });

  it('El botón de enviar debe estar deshabilitado si el campo de contraseña no tiene al menos 6 caracteres', () => {
    const fixture = TestBed.createComponent(formResetComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
  
    const passwordControl = component.validateForm.controls['password'];
    passwordControl.setValue('abc12');
    passwordControl.markAsTouched();
  
    const btnElement = fixture.debugElement.query(By.css('button.btn_submit'));
    expect(btnElement.nativeElement.disabled).toBeTrue();
  });

  it('El botón de enviar debe estar deshabilitado si el campo de confirmación de contraseña está vacío', () => {
    const fixture = TestBed.createComponent(formResetComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
  
    const password2Control = component.validateForm.controls['password2'];
    password2Control.setValue('');
    password2Control.markAsTouched();
  
    const btnElement = fixture.debugElement.query(By.css('button.btn_submit'));
    expect(btnElement.nativeElement.disabled).toBeTrue();
  });

  it('formulario invalido por no confirmar el campo de password2', () => {
    const fixture = TestBed.createComponent(formResetComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
  
    component.validateForm = formBuilder.group({
      email: ['juanperez@example.com', [Validators.required, Validators.email]],
      password: ['abc123', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]]
    }, { validator: component.checkPasswordsMatch });
  
    component.validateForm.controls['password2'].setValue('abc');
  
    expect(component.validateForm.invalid).toBeTrue();
  });
  
  it('Formulario valido al completar todos los campos correctamente' , () => {
    const fixture = TestBed.createComponent(formResetComponent);
    const component = fixture.componentInstance
    fixture.detectChanges()

    component.validateForm = formBuilder.group({
      email: ['juanperez@example.com'],
      password: ['abc123'],
      password2: ['abc123'],
      })
    expect(component.validateForm.valid).toBeTrue()
  })

  it('debería devolver un mensaje de error para el campo de correo electrónico cuando este vacio', () => {
    component.validateForm.controls['email'].setErrors({ required: true });
    const result = component.getErrorMessage('email');
    expect(result).toEqual('Email requerido');
  });

  it('debería devolver un mensaje de error para el campo de correo electrónico cuando no es válido', () => {
    component.validateForm.controls['email'].setErrors({ email: true });
    const result = component.getErrorMessage('email');
    expect(result).toEqual('Email invalido');
  });

  it('debe devolver un mensaje de error para el campo de correo electrónico cuando es incorrecto', () => {
    component.validateForm.controls['email'].setErrors({ checkEmail: true });
    const result = component.getErrorMessage('email');
    expect(result).toEqual('Email incorrecto');
  });

  it('Debe devolver un mensaje de error para el campo de contraseña cuando no se complete', () => {
    component.validateForm.controls['password'].setErrors({ required: true });
    const result = component.getErrorMessage('password');
    expect(result).toEqual('Password requerido');
  });

  it('debería devolver un mensaje de error para el campo de contraseña tenga un largo menor a 6 ', () => {
    component.validateForm.controls['password'].setErrors({ minlength: true });
    const result = component.getErrorMessage('password');
    expect(result).toEqual('Password inseguro');
  });

  it('no hay mensajes de error al completar todos los campos correctamente', () => {
    component.userEmail="juanperez@example.com"
    component.validateForm.controls['email'].setValue(component.userEmail);
    component.validateForm.controls['password'].setValue('password123');
    component.validateForm.controls['password2'].setValue('password123');
    const email = component.getErrorMessage('email');
    const password = component.getErrorMessage('password');
    const password2 = component.getErrorMessage('password2');
    expect(email).toEqual('');
    expect(password).toEqual('');
    expect(password2).toEqual('');
  });

  it('Debería devolver un mensaje de error para el campo contraseña2 cuando el campo este vacio', () => {
    component.validateForm.controls['password2'].setErrors({ required: true });
    const result = component.getErrorMessage('password2');
    expect(result).toEqual('Confirme Contraseña');
  });

  it('Retorna mensaje de error para el campo contraseña2 cuando no coincide con el campo de contraseña', () => {
    component.validateForm.controls['password2'].setValue('wrongpassword');
    component.validateForm.controls['password'].setValue('correctpassword');
    const result = component.getErrorMessage('password2');
    expect(result).toEqual('Las Contraseñas no coinsiden');
  });

  it('No retornara mensaje de error para contraseña2 cuando cuando coincida con el campo de contraseña', () => {
    component.validateForm.controls['password2'].setValue('correctpassword');
    component.validateForm.controls['password'].setValue('correctpassword');
    const result = component.getErrorMessage('password2');
    expect(result).toEqual('');
  });
  
  it('LLamada a httpService.patch con la URL correcta y los datos del formulario', () => {
    component.userId = '7';
    const mockFormData = {
      email: 'juanperez@example.com',
      password: 'abc123',
      password2: 'abc123'
    };
    const spy = spyOn(httpService, 'patch').and.returnValue(of(null));
    component.validateForm.setValue(mockFormData);
    component.submitForm();
    const expectedUrl = `${environment.URL_BASE}/users/resetPassword/${component.userId}`;
    const expectedData = mockFormData;
    expect(spy).toHaveBeenCalledWith(expectedUrl, expectedData);
  });
  
  it('No debería llamar a httpService.patch si las contraseñas no son iguales', () => {
    //objeto de datos simulado para enviar al servidor
    const mockFormData = {
      email: 'test@test.com',
      password: 'password123',
      password2: 'password456'
    };
    
    // Establece los valores del formulario de validación para los datos simulados
    component.validateForm.setValue(mockFormData);
    const spy = spyOn(httpService, 'patch');
    component.submitForm();
    
    // Verifica que la función httpService.patch no se haya llamado
    expect(spy).not.toHaveBeenCalled();
  });
  
  it('Probando la funcion togglePasswordVisibility para el icono del ojo y ver las contraseñas', () => {
    component.passwordVisibility = false;
    component.togglePasswordVisibility();
    expect(component.passwordVisibility).toBe(true);
  });
  
});

