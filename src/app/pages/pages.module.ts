import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeModule } from './home/home.module';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { formResetComponent } from '../components/form-reset/form-reset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WalletComponent } from './wallet/wallet.component';
import { PlazoFijoComponent } from './plazo-fijo/plazo-fijo.component';
// import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    PagesComponent,
    PerfilComponent,
    IngresosComponent,
    EgresosComponent,
    formResetComponent,
    WalletComponent,
    PlazoFijoComponent
    // HomeComponent
  ],
  imports: [
    CommonModule, // Habilita el router-outlet
    PagesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HomeModule,
  ],
  exports:[
    PagesRoutingModule
  ]
})
export class PagesModule { }
