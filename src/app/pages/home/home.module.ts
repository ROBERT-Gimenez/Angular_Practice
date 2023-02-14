import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { formResetComponent } from 'src/app/components/form-reset/form-reset.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
    // Aca van todos los modulos de los componentes que se van a usar dentro de home
  ]
})
export class HomeModule {}
