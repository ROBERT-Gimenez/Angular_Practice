import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './pages/auth/auth-login-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PagesComponent } from './pages/pages.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { LoginComponent } from './pages/auth/login/login.component';

const routes: Routes = [  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/pages.module')
    .then(m => m.PagesModule)
  },
  {
    path:'**',
    component:PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            AuthRoutingModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }



