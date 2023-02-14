import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../core/guards/auth/auth.guard';
import { PerfilComponent } from './perfil/perfil.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home', 
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate:[AuthGuard],
  },
  {
    path:'perfil',
    component: PerfilComponent
  },
  {
    path:'ingresos',
    component: IngresosComponent
  },
  {
    path:'egresos',
    component: EgresosComponent
  },
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
